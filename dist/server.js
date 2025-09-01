import 'dotenv/config';
import express from "express";
import userRoutes from "./routes/Users.js";
import profilRoutes from "./routes/Profiles.js";
import competenceRoutes from "./routes/Competences.js";
import profilSortieRoutes from "./routes/Profils-sortie.js";
import niveauRoutes from "./routes/Niveaux.js";

const PORT = process.env.PORT || 3003;
const app = express();
app.use(express.json());
app.use("/users", userRoutes);
app.use("/profils", profilRoutes);
app.use("/competences", competenceRoutes);
app.use("/profils-sortie", profilSortieRoutes);
app.use("/niveaux", niveauRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
