import { z } from "zod";
import { ErreureMessageFR } from "../types/enums/MessageErreur/ErreurMessageFr.js";

export const loginSchema = z.object({
  email: z.string().email({ message: ErreureMessageFR.EMAIL_INVALID }),
  password: z.string().min(6, { message: ErreureMessageFR.PASSWORD_MIN_LENGTH })
});
