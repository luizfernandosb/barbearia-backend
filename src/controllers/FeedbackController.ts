import { Request, Response } from "express";

import prisma from "../services/prisma";
import { error } from "console";

export const getFeedback = async (req: Request, res: Response) => {
  try {
    const feedbacks = await prisma.feedback.findMany();
    res.json(feedbacks);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar dados." });
  }
};

export const addFeedback = async (req: Request, res: Response) => {
  const { name, rate, feedback } = req.body;
  try {
    if (!feedback || !rate || !name) {
      throw new Error("Preencha todos os campos.");
    }
    const newFeedback = await prisma.feedback.create({
      data: {
        name,
        rate,
        feedback,
      },
    });
    res.status(201).json(newFeedback);
  } catch (error) {
    // console.log(error)
    res.status(500).json({ error: "Erro ao enviar feedbacl." });
  }
};
