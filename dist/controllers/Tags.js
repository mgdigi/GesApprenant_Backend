import { TagModel } from "../models/Tags.js";
const tagModel = new TagModel();
export class TagController {
    async getAll(req, res) {
        const tags = await tagModel.getAll();
        res.json(tags);
    }
    async getById(req, res) {
        const id = +req.params.id;
        const tag = await tagModel.getById(id);
        (!tag)
            ? res.status(404).json({ message: "Tag non trouvé" })
            : res.status(200).json(tag);
    }
    async create(req, res) {
        const data = req.body; //verifie si les données saisie sont valides
        const tagCreate = await tagModel.create(data.data);
        return res.status(201).json(tagCreate);
    }
    async update(req, res) {
        const id = +req.params.id;
        const data = req.body;
        const tagUpdate = await tagModel.update(id, data);
        return res.status(201).json(tagUpdate);
    }
    async delete(req, res) {
        const id = +req.params.id;
        const tag = await tagModel.getById(id);
        if (!tag) {
            res.status(404).json({ message: "Tag non trouvé" });
        }
        await tagModel.delete(id);
        res.status(204).send(); // renvoie
    }
}
