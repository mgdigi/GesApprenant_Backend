import { z } from "zod";
export const createPromoSchema = z.object({
    libelle: z.string().min(2),
    dateDebut: z.string(), // tu peux changer en .datetime() si tu veux un vrai ISO date
    dateFin: z.string(),
    nombreApprenant: z.number().int(),
    nombreRefs: z.number().int(),
    statut: z.string(),
    niveauId: z.number(),
});
export const updatePromoSchema = createPromoSchema.partial();
