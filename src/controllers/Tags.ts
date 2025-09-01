import {Request, Response} from "express"

import {TagModel} from "../models/Tags.js"

import { createTagSchema, updateTagSchema } from "../dto/tag.dto.js"

const tagModel = new TagModel()

export class TagController
{
    async getAll(req:Request,res:Response)
    {
        const tags = await tagModel.getAll();
        res.json(tags) ;
    }

    async getById(req:Request, res:Response) // recupere le tag par son id
    {
        const id = +req.params.id ;
        const tag = await tagModel.getById(id) ;
        (!tag)
             ? res.status(404).json({message: "Tag non trouvé"})
             : res.status(200).json(tag)  
    }

    async create(req:Request , res:Response)
    {
        const data = createTagSchema.safeParse(req.body); //verifie si les données saisie sont valides
        if(!data.success)
        {
            res.status(400).json(data.error.format())
        }
        const tagCreate = await tagModel.create(data.data);
        return res.status(201).json(tagCreate)
    }

    async update(req:Request, res:Response)
    {
        const id = +req.params.id;
        const data = updateTagSchema.safeParse(req.body);

        if(!data.success){
            res.status(400).json(data.error.format);
        }
        const tagUpdate = await tagModel.update(id,data.data);
        return res.status(201).json(tagUpdate);
    }

    async delete(req:Request, res:Response)
    {
        const id = +req.params.id ;
        const tag = await tagModel.getById(id) ;
        if(!tag)
        {
            res.status(404).json({message: "Tag non trouvé"})
        }
        await tagModel.delete(id);  
        res.status(204).send(); // renvoie
    }

}