import { Request, Response, NextFunction } from "express";
import { ErreureMessageFR } from "../types/enums/MessageErreur/ErreurMessageFr.js";
import { verifyAccessToken } from "../utils/jwt.js";

const JWT_SECRET = process.env.JWT_SECRET as string;

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: ErreureMessageFR.TOKEN_MANQUANT });

  const token = authHeader.split(" ")[1];

  try {
    const decoded = verifyAccessToken(token);
    (req).user = decoded; 
    next();
  } catch (error) {
    return res.status(403).json({ message: ErreureMessageFR.TOKEN_INVALID });
  }
};

export const authorizeRoles = (...roles: string[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const user = (req as any).user;
        if (!user || !roles.includes(user.profil.libelle.toLowerCase())) {
            return res.status(403).json({ message: ErreureMessageFR.FORBIDDEN });
        }
        next();
    };
};
