import { z } from "zod";

export const createReferentielSchema = z.object({
  nom: z.string().min(2),
  description: z.string(),
  nombreApprenant: z.number().int(),
  nombreFormateur: z.number().int(),
  nombreSession: z.string().optional(),
});

export const updateReferentielSchema = createReferentielSchema.partial();
