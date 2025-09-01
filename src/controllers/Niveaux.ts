import {Request, Response} from "express";
import { NiveauModel } from "../models/Niveaux.js";

import { createNiveauSchema, updateNiveauSchema } from "../dto/niveau.dto.js";

const niveauModel = new NiveauModel();

export class NiveauController {
    async getAll(req: Request, res: Response): Promise<void> {
        const niveaux = await niveauModel.getAll();
        (!niveaux) ? res.status(404).json({message: "Aucun niveau trouvé"}) :
        res.json(niveaux);
    }

    async getById(req: Request, res: Response): Promise<void> {
        const id = +req.params.id;
        const niveau = await niveauModel.getById(id);
        (!niveau) ? res.status(404).json({message: "Niveau non trouvé"}) :
        res.json(niveau);
    }

    async create(req: Request, res: Response){
        const parsed = createNiveauSchema.safeParse(req.body);
        if(!parsed.success){
            return res.status(400).json(parsed.error.format());
        }
        const niveau = await niveauModel.create(parsed.data);
        res.status(201).json(niveau);
    }

    async update(req: Request, res: Response){
        const id = Number(req.params.id);
        const parsed = updateNiveauSchema.safeParse(req.body);
        if(!parsed.success){
            return res.status(400).json(parsed.error.format());
        }
        const niveau = await niveauModel.update(id, parsed.data);
        res.json(niveau);
    }

    async delete(req: Request, res: Response){
        const id = Number(req.params.id);
        await niveauModel.delete(id);
        res.status(204).send();
    }
    
}