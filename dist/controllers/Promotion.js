import { PromotionModel } from "../models/Promotion.js";
import { createPromoSchema, updatePromoSchema } from "../dto/promo.dto.js";
const promotionModel = new PromotionModel();
export class PromotionController {
    async getAll(req, res) {
        const promotions = await promotionModel.getAll();
        res.json(promotions);
    }
    async getById(req, res) {
        const id = Number(req.params.id);
        const promotion = await promotionModel.getById(id);
        if (!promotion)
            return res.status(404).json({ message: "Utilisateur non trouvé" });
        res.json(promotion);
    }
    async create(req, res) {
        const parsed = createPromoSchema.safeParse(req.body);
        if (!parsed.success) {
            return res.status(400).json(parsed.error.format());
        }
        const promotion = await promotionModel.create(parsed.data);
        res.status(201).json(promotion);
    }
    async update(req, res) {
        const id = Number(req.params.id);
        const parsed = updatePromoSchema.safeParse(req.body);
        if (!parsed.success) {
            return res.status(400).json(parsed.error.format());
        }
        const promotion = await promotionModel.update(id, parsed.data);
        res.json(promotion);
    }
    async delete(req, res) {
        const id = Number(req.params.id);
        await promotionModel.delete(id);
        res.status(204).send();
    }
}
