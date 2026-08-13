import { Router } from "express";
import {
  getDevelopers,
  getDeveloper,
} from "../controllers/developer.controller";

const router = Router();

router.get("/", getDevelopers);
router.get("/:id", getDeveloper);

export default router;