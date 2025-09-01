import { ReferentielModel } from "../models/Referentiels.js";
import { createReferentielSchema, updateReferentielSchema } from "../dto/referentiel.dto.js";
const referentielModel = new ReferentielModel();
export class ReferentielController {
    async getAll(req, res) {
        const referentiels = await referentielModel.getAll();
        res.json(referentiels);
    }
    async getById(req, res) {
        const id = Number(req.params.id);
        const referentiel = await referentielModel.getById(id);
        if (!referentiel)
            return res.status(404).json({ message: "Référentiel non trouvé" });
        res.json(referentiel);
    }
    async create(req, res) {
        const parsed = createReferentielSchema.safeParse(req.body);
        if (!parsed.success) {
            return res.status(400).json(parsed.error.format());
        }
        const referentiel = await referentielModel.create(parsed.data);
        res.status(201).json(referentiel);
    }
    async update(req, res) {
        const id = Number(req.params.id);
        const parsed = updateReferentielSchema.safeParse(req.body);
        if (!parsed.success) {
            return res.status(400).json(parsed.error.format());
        }
        const referentiel = await referentielModel.update(id, parsed.data);
        res.json(referentiel);
    }
    async delete(req, res) {
        const id = Number(req.params.id);
        await referentielModel.delete(id);
        res.status(204).send();
    }
}
