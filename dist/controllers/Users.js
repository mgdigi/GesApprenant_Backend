import { UserModel } from "../models/Users.js";
import { ErreurHandler } from "../middlewares/ErreurHandler.js";
const handleError = new ErreurHandler();
const userModel = new UserModel();
export class UserController {
    async getAll(req, res) {
        const users = await userModel.getAll();
        res.json(users);
    }
    async getById(req, res, next) {
        const id = Number(req.params.id);
        const user = await userModel.getById(id);
        if (!user)
            return handleError.notFound(req, res, next);
        res.json(user);
    }
    async create(req, res) {
        const data = req.body;
        const user = await userModel.create(data);
        res.status(201).json(user);
    }
    async update(req, res) {
        const id = Number(req.params.id);
        const data = req.body;
        const user = await userModel.update(id, data);
        res.json(user);
    }
    async delete(req, res) {
        const id = Number(req.params.id);
        await userModel.delete(id);
        res.status(204).send();
    }
}
