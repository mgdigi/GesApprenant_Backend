import {Request , Response, NextFunction} from "express";
import { SuccesMessageFR } from "../types/enums/MessageSucces/SuccesMessageFr.js";
export class SuccesHandler {

    ok = async (req: Request, res: Response, next: NextFunction) => {
        res.status(200).json({message : SuccesMessageFR.SUCCESED});
        next();
    }

    created = async (req: Request, res: Response, next: NextFunction) => {
        res.status(201).json({message: SuccesMessageFR.CREATED});
        next();
    }

    noContent = async (req: Request, res: Response, next: NextFunction) => {
        res.status(204).send();
        next();
    }

    
}