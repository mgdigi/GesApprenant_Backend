import { z } from "zod";
export const createUserSchema = z.object({
    nom: z.string().min(2),
    prenom: z.string().min(2),
    email: z.string().email(),
    photo: z.string().url().optional(),
    password: z.string().min(6),
    adresse: z.string().optional(),
    telephone: z.string().optional(),
    profilId: z.number(), // obligatoire
    niveauId: z.number().optional(),
    statutAD: z.string().optional(),
    referentielId: z.number().optional(),
    promotionId: z.number().optional(),
});
export const updateUserSchema = createUserSchema.partial();
