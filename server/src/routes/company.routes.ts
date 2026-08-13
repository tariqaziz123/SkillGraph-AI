import { Router } from "express";
import { fetchCompanies } from "../controllers/company.service";

const router = Router();

router.get("/", fetchCompanies);

export default router;