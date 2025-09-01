import { Router } from 'express';
import { TagController } from '../controllers/Tags.js';
const router = Router();
const controller = new TagController();
// definition des routes
router.get("/", controller.getAll.bind(controller));
router.get("/:id", controller.getById.bind(controller));
router.post("/", controller.create.bind(controller));
router.patch("/:id", controller.update.bind(controller));
router.delete("/:id", controller.delete.bind(controller));
export default router;
