import express from 'express';
import { protectRoute } from '../middleware/verify.auth.js';
import { getUserInfo, updateDetails } from '../controller/user.controller.js';


const router=express.Router();

router.put("/updateDetails",protectRoute,updateDetails);

router.get("/getUserInfo/:userId",protectRoute,getUserInfo);

export default router;