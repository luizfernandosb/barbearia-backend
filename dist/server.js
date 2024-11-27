"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const feedbackRoutes_1 = __importDefault(require("./routes/feedbackRoutes"));
const cors = require("cors");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(cors({
    origin: ["http://localhost:5173", "https://invictus-barber.vercel.app/"], // Origens permitidas
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"], // Métodos HTTP
    allowedHeaders: ["Content-Type", "Authorization", "token"], // Cabeçalhos permitidos
}));
app.use(express_1.default.json());
app.use("/api/", feedbackRoutes_1.default);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta  ${PORT}`);
});
