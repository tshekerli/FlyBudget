import { Router } from "express";
import {getLocationsController, registerUserController, loginController, checkToken} from "../controllers/DbController.js";
import { search } from "../controllers/requestController.js";
import cors from "cors";
import bodyParser from "body-parser";
const router = Router();

router.use(cors());
router.use(bodyParser.json());

router.get("/locations", getLocationsController);
router.get("/search", search)
router.post("/register", registerUserController);
router.post("/login", loginController);
router.get("/checkToken",checkToken, (req, res) => {
    res.status(200).send("Token is valid");
});
export default router;