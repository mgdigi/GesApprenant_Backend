import { Request, Response, NextFunction } from "express";
import { UserModel } from "../models/Users.js";
import { ErreurHandler } from "../middlewares/ErreurHandler.js";
import { SuccesHandler } from "../middlewares/SuccesHandler.js";

const handleError = new ErreurHandler();
const handleSuccess = new SuccesHandler();
const userModel = new UserModel();

export class UserController {
  async getAll(req: Request, res: Response) {
    const users = await userModel.getAll();
    res.json(users);
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    const id = Number(req.params.id);
    const user = await userModel.getById(id);
    if (!user) return handleError.notFound(req, res, next);
    res.json(user);
  }

  async create(req: Request, res: Response) {
    const data = req.body;
    const user = await userModel.create(data);
    res.status(201).json(user);
  }

  async update(req: Request, res: Response) {

    const id = Number(req.params.id);
    const data = req.body;
    const user = await userModel.update(id, data);
    res.json(user);

  }

  async delete(req: Request, res: Response, next : NextFunction) {

    const id = Number(req.params.id);
    await userModel.delete(id);
    handleSuccess.noContent(req, res, next)

  }
}
