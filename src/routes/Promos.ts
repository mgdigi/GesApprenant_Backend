import { Router } from "express";
import { PromotionController } from "../controllers/Promos.js";

const router = Router();
const controller = new PromotionController();

router.get("/", controller.getAll.bind(controller));
router.get("/:id", controller.getById.bind(controller));
router.post("/", controller.create.bind(controller));
router.put("/:id", controller.update.bind(controller));
router.delete("/:id", controller.delete.bind(controller));
router.patch("/:id", controller.update.bind(controller));

export default router;