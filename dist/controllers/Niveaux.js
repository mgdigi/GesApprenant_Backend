import { NiveauModel } from "../models/Niveaux.js";
import { createNiveauSchema, updateNiveauSchema } from "../dto/niveau.dto.js";
const niveauModel = new NiveauModel();
export class NiveauController {
    async getAll(req, res) {
        const niveaux = await niveauModel.getAll();
        (!niveaux) ? res.status(404).json({ message: "Aucun niveau trouvé" }) :
            res.json(niveaux);
    }
    async getById(req, res) {
        const id = +req.params.id;
        const niveau = await niveauModel.getById(id);
        (!niveau) ? res.status(404).json({ message: "Niveau non trouvé" }) :
            res.json(niveau);
    }
    async create(req, res) {
        const parsed = createNiveauSchema.safeParse(req.body);
        if (!parsed.success) {
            return res.status(400).json(parsed.error.format());
        }
        const niveau = await niveauModel.create(parsed.data);
        res.status(201).json(niveau);
    }
    async update(req, res) {
        const id = Number(req.params.id);
        const parsed = updateNiveauSchema.safeParse(req.body);
        if (!parsed.success) {
            return res.status(400).json(parsed.error.format());
        }
        const niveau = await niveauModel.update(id, parsed.data);
        res.json(niveau);
    }
    async delete(req, res) {
        const id = Number(req.params.id);
        await niveauModel.delete(id);
        res.status(204).send();
    }
}
