import { Router } from "express";
import {getLocationsController} from "../controllers/controller.js";
import cors from "cors";
import bodyParser from "body-parser";
const router = Router();

router.use(cors());
router.use(bodyParser.json());

router.get("/locations", getLocationsController);

export default router;