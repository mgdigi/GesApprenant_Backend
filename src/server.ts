import 'dotenv/config'; 
import express from "express";
import userRoutes from "./routes/Users.js";
import referentielRoutes from "./routes/Referentiels.js";
const PORT = process.env.PORT || 3003;
const app = express();
app.use(express.json());
app.use("/users", userRoutes);


app.use("/referentiels", referentielRoutes);


app.listen(3000, () => {
  console.log(`Server is running on port ${PORT}`);
});