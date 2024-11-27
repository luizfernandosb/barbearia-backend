"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const FeedbackController_1 = require("../controllers/FeedbackController");
const router = (0, express_1.Router)();
router.get("/feedbacks", FeedbackController_1.getFeedback);
router.post("/feedbacks", FeedbackController_1.addFeedback);
exports.default = router;
