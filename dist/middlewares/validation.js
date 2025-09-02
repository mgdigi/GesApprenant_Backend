import { ErreureMessageFR } from "../types/enums/MessageErreur/ErreurMessageFr.js";
export const validateBody = (schema) => {
    return (req, res, next) => {
        try {
            const parsed = schema.safeParse(req.body);
            if (!parsed.success) {
                return res.status(400).json({
                    success: false,
                    message: ErreureMessageFR.INVALID_DATA
                });
            }
            req.body = parsed.data;
            next();
        }
        catch (error) {
            next(error);
        }
    };
};
