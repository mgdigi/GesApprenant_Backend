import { Router } from "express";
import { AuthentificationController} from  "../controllers/Authentification.js";
import { validateBody } from "../middlewares/validation.js";
import { loginSchema } from "../dto/login.dto.js";

const router = Router();

const controller = new AuthentificationController();

router.post("/login", validateBody(loginSchema), controller.login.bind(controller));
router.post("/refresh", controller.refreshToken.bind(controller));

export default router;
