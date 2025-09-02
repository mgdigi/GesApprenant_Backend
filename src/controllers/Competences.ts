import { Request, Response, NextFunction } from "express";
import { CompetenceModel } from "../models/Competences.js";
import { ErreurHandler } from "../middlewares/ErreurHandler.js";

const competenceModel = new CompetenceModel();
const handleError = new ErreurHandler();

export class CompetenceController {
    async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
        const competences = await competenceModel.getAll();
        (!competences) ? handleError.notFound(req, res, next) :
        res.json(competences);
    }

    async getById(req: Request, res: Response, next : NextFunction): Promise<void> {
        const id = +req.params.id;
        const competence = await competenceModel.getById(id);
        (!competence) ? handleError.notFound(req, res, next) :
        res.json(competence);
    }

    async create(req: Request, res: Response){
        const data = req.body;
        const competence = await competenceModel.create(data);
        res.status(201).json(competence);
    }

    async update(req: Request, res: Response){
        const id = Number(req.params.id);
        const data = req.body;
        
        const competence = await competenceModel.update(id, data);
        res.json(competence);
    }

    async delete(req: Request, res: Response){
        const id = Number(req.params.id);
        await competenceModel.delete(id);
        res.status(204).send();
    }

    async getNiveauxByCompetenceId(req: Request, res: Response, next : NextFunction): Promise<void> {
        const id = +req.params.id;
        const competence = await competenceModel.getNiveauxByCompetenceId(id);
        (!competence) ? handleError.notFound(req, res, next) :
        res.json(competence.niveaux);
    }
}
