import { z } from "zod";

export const createNiveauSchema = z.object({
  libelle: z.string().min(2),
  // ici pas de FK direct dans ton schema pour Competence, 
  // mais tu pourras gérer les relations dans les services (ex: connect).
});

export const updateNiveauSchema = createNiveauSchema.partial();
