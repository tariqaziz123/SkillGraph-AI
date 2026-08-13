import { Router } from "express";
import { getDevelopers } from "../controllers/developer.controller";

const router = Router();

router.get("/", getDevelopers);

export default router;