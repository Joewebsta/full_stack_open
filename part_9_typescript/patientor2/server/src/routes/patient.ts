import express from "express";
import { getNonSensitivePatients } from "../services/patientService";

export const patientRouter = express.Router();

patientRouter.get("/", (_req, res) => {
  res.send(getNonSensitivePatients());
});
