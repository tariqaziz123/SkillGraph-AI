import express from "express";
import dotenv from "dotenv";

import developerRoutes from "./routes/developer.routes";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/developers", developerRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});