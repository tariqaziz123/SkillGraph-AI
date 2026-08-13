import { Router } from "express";
import { fetchSkills } from "../controllers/skill.controller";

const router = Router();

router.get("/", fetchSkills);

export default router;