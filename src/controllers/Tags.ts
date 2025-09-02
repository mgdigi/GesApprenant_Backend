import {Request, Response, NextFunction} from "express"
import {TagModel} from "../models/Tags.js"
import { ErreurHandler } from "../middlewares/ErreurHandler.js";
import { SuccesHandler } from "../middlewares/SuccesHandler.js";
import { success } from "zod";

const handleError = new ErreurHandler();
const handleSuccess = new SuccesHandler();


const tagModel = new TagModel()

export class TagController
{
    async getAll(req:Request,res:Response)
    {
        const tags = await tagModel.getAll();
        res.json(tags) ;
    }

    async getById(req:Request, res:Response, next: NextFunction) 
    {
        const id = +req.params.id ;
        const tag = await tagModel.getById(id) ;
        (!tag)
             ? handleError.notFound(req, res, next)
             : res.status(200).json(tag)  
    }

    async create(req:Request , res:Response)
    {

        const data = req.body; 
        const tagCreate = await tagModel.create(data.data);
        return res.status(201).json(tagCreate)
        
    }

    async update(req:Request, res:Response)
    {
        const id = +req.params.id;
        const data = req.body;

        const tagUpdate = await tagModel.update(id, data);
        return res.status(201).json(tagUpdate);
    }

    async delete(req:Request, res:Response, next: NextFunction)
    {
        const id = +req.params.id ;
        const tag = await tagModel.getById(id) ;
        if(!tag)
        {
            handleError.notFound(req, res, next)
        }
        await tagModel.delete(id);  
        handleSuccess.noContent(req, res, next)
     }

}