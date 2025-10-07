import express from "express";
import home from "../controller/control2.js";

let router = express.Router();
// router.get("/home/:name&:phone&:age&:city",home)
// router.get("/home/:name=:phone=:age=:city",home)
router.get("/home/:name/:phone/:age/:city",home)

export default router;



