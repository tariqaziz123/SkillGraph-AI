import express from "express";
import dotenv from "dotenv";

import developerRoutes from "./routes/developer.routes";
import { errorHandler } from "./middleware/error.middleware";
import { notFound } from "./middleware/notFound.middleware";
import skillRoutes from "./routes/skill.routes";
import technologyRoutes from "./routes/technology.routes";
import companyRoutes from "./routes/company.routes";
import statsRoutes from "./routes/stats.routes";

dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        status: "OK",
        service: "SkillGraph API",
        version: "1.0.0"
    });
});

app.use("/developers", developerRoutes);
app.use("/skills", skillRoutes);
app.use("/technologies", technologyRoutes);
app.use("/companies", companyRoutes);
app.use("/stats", statsRoutes);
app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});