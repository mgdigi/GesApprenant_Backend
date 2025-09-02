import { PrismaClient } from "@prisma/client";
import { UserModel } from "../models/Users.js";
import { generateAccessToken, generateRefreshToken } from "../utils/jwt.js";
const userModel = new UserModel();
const prisma = new PrismaClient();
export class AuthentificationController {
    async login(req, res) {
        const { email, password } = req.body;
        try {
            const user = await userModel.getByEmail(email);
            if (!user)
                return res.status(404).json({ message: "Utilisateur non trouvé" });
            const isPasswordValid = await userModel.verifyPassword(password, user.password);
            if (!isPasswordValid)
                return res.status(401).json({ message: "Email ou mot de passe incorrect" });
            const accessToken = generateAccessToken(user.id);
            const refreshToken = generateRefreshToken(user.id);
            return res.status(200).json({
                success: true,
                accessToken,
                refreshToken
            });
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Erreur interne du serveur" });
        }
    }
    async refreshToken(req, res) {
        const { token } = req.body;
        if (!token)
            return res.status(400).json({ message: "Token manquant" });
        try {
            const payload = await prisma.refreshToken.findUnique({ where: { token } });
            if (!payload)
                return res.status(401).json({ message: "Token invalide" });
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
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Erreur interne du serveur" });
        }
    }
}
