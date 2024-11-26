import { Router } from "express";
import {
  getFeedback,
  addFeedback
} from "../controllers/FeedbackController";

const router = Router();

router.get("/feedbacks", getFeedback);
router.post("/feedbacks", addFeedback);


export default router;
