import {Request, Response} from "express";
import { ProfilSortieModel } from "../models/Profils-sortie.js";
import { createProfilSortieSchema, updateProfilSortieSchema } from "../dto/profilSortie.dto.js";

const profilSortieModel = new ProfilSortieModel();

export class ProfilSortieController {
    async getAll(req: Request, res: Response): Promise<void> {
        const profils = await profilSortieModel.getAll();
        (!profils) ? res.status(404).json({message: "Aucun profil de sortie trouvé"}) :
        res.json(profils);
    }

    async getById(req: Request, res: Response): Promise<void> {
        const id = +req.params.id;
        const profil = await profilSortieModel.getById(id);
        (!profil) ? res.status(404).json({message: "Profil de sortie non trouvé"}) :
        res.json(profil);
    }

    async create(req: Request, res: Response){
        const parsed = createProfilSortieSchema.safeParse(req.body);
        if(!parsed.success){
            return res.status(400).json(parsed.error.format());
        }
        const profil = await profilSortieModel.create(parsed.data);
        res.status(201).json(profil);
    }

    async update(req: Request, res: Response){
        const id = Number(req.params.id);
        const parsed = updateProfilSortieSchema.safeParse(req.body);
        if(!parsed.success){
            return res.status(400).json(parsed.error.format());
        }
        const profil = await profilSortieModel.update(id, parsed.data);
        res.json(profil);
    }

    async delete(req: Request, res: Response){
        const id = Number(req.params.id);
        await profilSortieModel.delete(id);
        res.status(204).send();
    }

}