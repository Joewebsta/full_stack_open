import express from "express";
import { getDiagnoses } from "../services/diagnosisService";

export const diagnosisRouter = express.Router();

diagnosisRouter.get("/", (_req, res) => {
  res.send(getDiagnoses());
});
