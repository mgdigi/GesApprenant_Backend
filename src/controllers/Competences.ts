import { Request, Response } from "express";
import { CompetenceModel } from "../models/Competences.js";
import { createCompetenceSchema, updateCompetenceSchema } from "../dto/competence.dto.js";

const competenceModel = new CompetenceModel();

export class CompetenceController {
    async getAll(req: Request, res: Response): Promise<void> {
        const competences = await competenceModel.getAll();
        (!competences) ? res.status(404).json({message: "Aucune compétence trouvée"}) :
        res.json(competences);
    }

    async getById(req: Request, res: Response): Promise<void> {
        const id = +req.params.id;
        const competence = await competenceModel.getById(id);
        (!competence) ? res.status(404).json({message: "Compétence non trouvée"}) :
        res.json(competence);
    }

    async create(req: Request, res: Response){
        const parsed = createCompetenceSchema.safeParse(req.body);
        if(!parsed.success){
            return res.status(400).json(parsed.error.format());
        }
        const competence = await competenceModel.create(parsed.data);
        res.status(201).json(competence);
    }

    async update(req: Request, res: Response){
        const id = Number(req.params.id);
        const parsed = updateCompetenceSchema.safeParse(req.body);
        if(!parsed.success){
            return res.status(400).json(parsed.error.format());
        }
        const competence = await competenceModel.update(id, parsed.data);
        res.json(competence);
    }

    async delete(req: Request, res: Response){
        const id = Number(req.params.id);
        await competenceModel.delete(id);
        res.status(204).send();
    }
}
