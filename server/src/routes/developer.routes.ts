import { Router } from "express";
import {
  getDevelopers,
  getDeveloper,
  getRecommendations,
} from "../controllers/developer.controller";

const router = Router();

router.get("/", getDevelopers);
router.get("/:id/recommendations", getRecommendations);
router.get("/:id", getDeveloper);

export default router;