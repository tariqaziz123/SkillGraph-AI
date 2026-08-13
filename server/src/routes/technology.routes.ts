import { Router } from "express";
import { fetchTechnologies } from "../controllers/technology.controller";

const router = Router();

router.get("/", fetchTechnologies);

export default router;