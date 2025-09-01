import 'dotenv/config';
import express from "express";
import userRoutes from "./routes/Users.js";
import profilRoutes from "./routes/Profiles.js";
const PORT = process.env.PORT || 3003;
const app = express();
app.use(express.json());
app.use("/users", userRoutes);
app.use("/profils", profilRoutes);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
