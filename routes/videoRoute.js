import express from "express";
import { getVideoStatus } from "../controllers/videoController.js";
import authUser from "../middleware/authUser.js";
import authDoctor from "../middleware/authDoctor.js";

const videoRouter = express.Router();

// Video routes for Jitsi Meet (no backend token needed - Jitsi is client-side)
videoRouter.post("/token", authUser, getVideoStatus);
videoRouter.post("/token-doctor", authDoctor, getVideoStatus);

export default videoRouter;
