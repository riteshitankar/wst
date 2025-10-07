import express from "express";
// import {home} from '../controllers/control.js';
import {home} from '../controllers/control2.js';

let router = express.Router();

router.get('/home',home)

export default router;