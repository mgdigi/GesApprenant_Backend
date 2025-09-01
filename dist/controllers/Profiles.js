import { ProfilModel } from "../models/Profiles.js";
import { createProfileSchema, updateProfileSchema } from "../dto/profile.dto.js";
const profilModel = new ProfilModel();
export class ProfilController {
    async getAll(req, res) {
        const profils = await profilModel.getAll();
        res.json(profils);
    }
    async getById(req, res) {
        const id = Number(req.params.id);
        const profil = await profilModel.getById(id);
        if (!profil)
            return res.status(404).json({ message: "Profil non trouvé" });
        res.json(profil);
    }
    async create(req, res) {
        const parsed = createProfileSchema.safeParse(req.body);
        if (!parsed.success) {
            return res.status(400).json(parsed.error.format());
        }
        const profil = await profilModel.create(parsed.data);
        res.status(201).json(profil);
    }
    async update(req, res) {
        const id = Number(req.params.id);
        const parsed = updateProfileSchema.safeParse(req.body);
        if (!parsed.success) {
            return res.status(400).json(parsed.error.format());
        }
        const profil = await profilModel.update(id, parsed.data);
        res.json(profil);
    }
    async delete(req, res) {
        const id = Number(req.params.id);
        await profilModel.delete(id);
        res.status(204).send();
    }
}
