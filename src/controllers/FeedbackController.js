"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addFeedback = exports.getFeedback = void 0;
const prisma_1 = __importDefault(require("../services/prisma"));
const getFeedback = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const feedbacks = yield prisma_1.default.feedback.findMany();
        res.json(feedbacks);
    }
    catch (error) {
        res.status(500).json({ error: "Erro ao buscar dados." });
    }
});
exports.getFeedback = getFeedback;
const addFeedback = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, rate, feedback } = req.body;
    try {
        if (!feedback || !rate || !name) {
            throw new Error("Preencha todos os campos.");
        }
        const newFeedback = yield prisma_1.default.feedback.create({
            data: {
                name,
                rate,
                feedback,
            },
        });
        res.status(201).json(newFeedback);
    }
    catch (error) {
        // console.log(error)
        res.status(500).json({ error: "Erro ao enviar feedbacl." });
    }
});
exports.addFeedback = addFeedback;
