import { Router } from "express";
import {getLocationsController, registerUserController, loginController, checkToken} from "../controllers/DbController.js";
import { search, receiveRequest } from "../controllers/requestController.js";
import cors from "cors";
import bodyParser from "body-parser";
const router = Router();

router.use(cors());
router.use(bodyParser.json());

router.get("/locations", getLocationsController);
router.get("/search", search)
router.post("/register", registerUserController);
router.post("/login", loginController);
router.post("/checkToken",checkToken, (req, res) => {
    res.status(200).send("Token is valid");
});
router.post("/usersearch", receiveRequest )


export default router;