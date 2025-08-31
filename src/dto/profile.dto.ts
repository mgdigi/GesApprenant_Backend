import { z } from "zod";

export const createProfileSchema = z.object({
  libelle: z.string().min(2, "Le libellé doit avoir au moins 2 caractères"),
});

export const updateProfileSchema = createProfileSchema.partial();
