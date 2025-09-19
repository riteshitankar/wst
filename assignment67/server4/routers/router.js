import express from 'express';
import {getHome, getAbout, getLocation, getPricing} from "../controllers/control.js"


let router = express.Router()

router.get("/",getHome);
router.get("/about", getAbout);
router.get("/location",getLocation);
router.get("/pricing",getPricing);

export default router