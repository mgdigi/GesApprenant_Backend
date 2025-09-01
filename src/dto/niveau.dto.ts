import { z } from "zod";

export const createNiveauSchema = z.object({
  libelle: z.string().min(2),
});

export const updateNiveauSchema = createNiveauSchema.partial();
