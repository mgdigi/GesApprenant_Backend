import { z } from "zod";

export const createReferentielSchema = z.object({
  nom: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  description: z.string().min(5, "La description doit contenir au moins 5 caractères"),
  nombreApprenant: z.number().int().nonnegative(),
  nombreFormateur: z.number().int().nonnegative(),
  nombreSession: z.string().optional(),
  promotionId: z.number().optional(),   // relation optionnelle
});

export const updateReferentielSchema = createReferentielSchema.partial();
