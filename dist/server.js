import 'dotenv/config';
import express from "express";
import userRoutes from "./routes/Users.js";
const app = express();
app.use(express.json());
app.use("/users", userRoutes);
app.listen(3003, () => {
    console.log("🚀 Server running on http://localhost:3003");
});
