import { z } from "zod";

export const createProfilSortieSchema = z.object({
  libelle: z.string().min(2),
});

export const updateProfilSortieSchema = createProfilSortieSchema.partial();
