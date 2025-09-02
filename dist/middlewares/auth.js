import jwt from "jsonwebtoken";
import { ErreureMessageFR } from "../types/enums/MessageErreur/ErreurMessageFr.js";
const JWT_SECRET = process.env.JWT_SECRET;
export const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader)
        return res.status(401).json({ message: ErreureMessageFR.TOKEN_MANQUANT });
    const token = authHeader.split(" ")[1];
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        (req).user = decoded;
        next();
    }
    catch (error) {
        return res.status(403).json({ message: ErreureMessageFR.TOKEN_INVALID });
    }
};
export const authorizeRoles = (...roles) => {
    return (req, res, next) => {
        const user = req.user;
        if (!user || !roles.includes(user.role)) {
            return res.status(403).json({ message: ErreureMessageFR.FORBIDDEN });
        }
        next();
    };
};
