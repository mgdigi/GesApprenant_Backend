import {Request, Response, NextFunction} from "express";
import { ErreureMessageFR } from "../types/enums/MessageErreur/ErreurMessageFr.js";

export class ErreurHandler {
    
   internServeur = async  (req: Request, res: Response, next: NextFunction) => { 
        res.status(500).json({message: ErreureMessageFR.ERREUR_SERVEUR});
        next();
    }

     notFound = async  (req: Request, res: Response, next: NextFunction) => { 
        res.status(404).json({message: ErreureMessageFR.RESSOURCE_INEXISTANTE});
        next();
    }

    badRequest = async  ( req: Request, res: Response, next: NextFunction)  => {
        res.status(400).json({message: ErreureMessageFR.BAD_REQUEST});
        next();
    }

    forbidden = async  (req: Request, res: Response, next: NextFunction) => {
        res.status(403).json({message: ErreureMessageFR.FORBIDDEN});
        next();
    }

    unauthorized = async  (req: Request, res: Response, next: NextFunction) => { 
        res.status(401).json({message: ErreureMessageFR.UNAUTHORIZED});
        next();
    }

    conflict = async  (req: Request, res: Response, next: NextFunction) => {
        res.status(409).json({message: ErreureMessageFR.CONFLICT});
        next();
    }

    unprocessableEntity = async  (req: Request, res: Response, next: NextFunction) => {
        res.status(422).json({message: ErreureMessageFR.UNPROCESSABLE_ENTITY});
        next();
    }

        

}
