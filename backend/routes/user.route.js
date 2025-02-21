import express from 'express';
import { protectRoute } from '../middleware/verify.auth.js';
import { updateDetails } from '../controller/user.controller.js';


const router=express.Router();

router.post("/updateDetails",protectRoute,updateDetails);

router.get("/getUserInfo/:userId",protectRoute,getUserInfo);

export default router;