import {Request, Response, NextFunction} from "express";
import { UserModel } from "../models/Users.js";
import { ErreurHandler } from "../middlewares/ErreurHandler.js";
import { generateAccessToken, generateRefreshToken  } from "../utils/jwt.js";
import prisma from "../prisma/client.js";


const  handleError = new ErreurHandler();
const userModel = new UserModel();

export class AuthentificationController {
    
    async login (req: Request, res: Response, next){
        const { email , password } = req.body;

        try{
            const user = await userModel.getByEmail(email);
            if(!user) return handleError.unauthorized(req, res, next);
            const isPasswordValid = await userModel.verifyPassword(password, user.password);
            if (!isPasswordValid) return handleError.unauthorized(req, res, next);

            const accessToken = generateAccessToken(user.id);
            const refreshToken = generateRefreshToken(user.id);

            await userModel.createRefreshToken(refreshToken , user.id);

            return res.status(200).json({
            success: true,
            accessToken
            });
            } catch (error) {
                console.error(error);
                return handleError.internServeur(req, res, next);
            }
    }

    async refreshToken (req: Request, res: Response, next: NextFunction){
        const { token } = req.body;
        if (!token) return handleError.badRequest(req, res, next);

        try {
            const payload = await prisma.refreshToken.findUnique({ where: { token } });
            if (!payload) return handleError.unauthorized(req, res, next);

            const accessToken = generateAccessToken(payload.userId);
            const refreshToken = generateRefreshToken(payload.userId);

            await prisma.refreshToken.delete({ where: { token } });
            await prisma.refreshToken.create({
                data: {
                    token: refreshToken,
                    userId: payload.userId
                }
            });

            return res.status(200).json({
                success: true,
                accessToken,
                refreshToken
            });
        } catch (error) {
            console.error(error);
            return handleError.internServeur(req, res, next);
        }
    }
    
}
