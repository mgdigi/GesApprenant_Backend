import { ProfilSortieModel } from "../models/Profils-sortie.js";
import { createProfilSortieSchema, updateProfilSortieSchema } from "../dto/profilSortie.dto.js";
const profilSortieModel = new ProfilSortieModel();
export class ProfilSortieController {
    async getAll(req, res) {
        const profils = await profilSortieModel.getAll();
        (!profils) ? res.status(404).json({ message: "Aucun profil de sortie trouvé" }) :
            res.json(profils);
    }
    async getById(req, res) {
        const id = +req.params.id;
        const profil = await profilSortieModel.getById(id);
        (!profil) ? res.status(404).json({ message: "Profil de sortie non trouvé" }) :
            res.json(profil);
    }
    async create(req, res) {
        const parsed = createProfilSortieSchema.safeParse(req.body);
        if (!parsed.success) {
            return res.status(400).json(parsed.error.format());
        }
        const profil = await profilSortieModel.create(parsed.data);
        res.status(201).json(profil);
    }
    async update(req, res) {
        const id = Number(req.params.id);
        const parsed = updateProfilSortieSchema.safeParse(req.body);
        if (!parsed.success) {
            return res.status(400).json(parsed.error.format());
        }
        const profil = await profilSortieModel.update(id, parsed.data);
        res.json(profil);
    }
    async delete(req, res) {
        const id = Number(req.params.id);
        await profilSortieModel.delete(id);
        res.status(204).send();
    }
}
