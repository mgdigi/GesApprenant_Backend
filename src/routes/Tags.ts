import {Router} from 'express';
import { TagController } from '../controllers/Tags.js';
import { validateBody } from '../middlewares/validation.js';
import { createTagSchema, updateTagSchema } from '../dto/tag.dto.js';

const router = Router()
const controller = new TagController()

router.get("/", controller.getAll.bind(controller)) 
router.get("/:id" , controller.getById.bind(controller))
router.post("/", validateBody(createTagSchema), controller.create.bind(controller))
router.patch("/:id", validateBody(updateTagSchema) , controller.update.bind(controller))
router.delete("/:id", controller.delete.bind(controller))


export default router;