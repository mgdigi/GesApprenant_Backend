import { z } from "zod";

export const createTagSchema = z.object({
  libelle: z.string().min(2),
});

export const updateTagSchema = createTagSchema.partial();
