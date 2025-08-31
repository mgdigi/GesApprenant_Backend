import { z } from "zod";
export const createCompetenceSchema = z.object({
    libelle: z.string().min(2),
    description: z.string().optional(),
});
export const updateCompetenceSchema = createCompetenceSchema.partial();
