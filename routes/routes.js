import { Router } from "express";
import {getLocationsController} from "../controllers/DbController.js";
import { search } from "../controllers/requestController.js";
import cors from "cors";
import bodyParser from "body-parser";
const router = Router();

router.use(cors());
router.use(bodyParser.json());

router.get("/locations", getLocationsController);
router.get("/search", search)

export default router;