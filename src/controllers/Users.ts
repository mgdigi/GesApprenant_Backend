import { Request, Response } from "express";
import { UserModel } from "../models/Users.js";
import { createUserSchema, updateUserSchema } from "../dto/user.dto.js";

const userModel = new UserModel();

export class UserController {
  async getAll(req: Request, res: Response) {
    const users = await userModel.getAll();
    res.json(users);
  }

  async getById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const user = await userModel.getById(id);
    if (!user) return res.status(404).json({ message: "Utilisateur non trouvé" });
    res.json(user);
  }

  async create(req: Request, res: Response) {
    const parsed = createUserSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json(parsed.error.format());
    }
    const user = await userModel.create(parsed.data);
    res.status(201).json(user);
  }

  async update(req: Request, res: Response) {
    const id = Number(req.params.id);
    const parsed = updateUserSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json(parsed.error.format());
    }
    const user = await userModel.update(id, parsed.data);
    res.json(user);
  }

  async delete(req: Request, res: Response) {
    const id = Number(req.params.id);
    await userModel.delete(id);
    res.status(204).send();
  }
}
