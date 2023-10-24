import express from "express";
import { NewPatient } from "../types";
import {
  getNonSensitivePatients,
  addPatient,
} from "../services/patientService";
import { toNewPatient } from "../utils";

export const patientRouter = express.Router();

patientRouter.get("/", (_req, res) => {
  res.send(getNonSensitivePatients());
});

patientRouter.post("/", (req, res) => {
  try {
    const patient: NewPatient = toNewPatient(req.body);
    const newPatient = addPatient(patient);
    res.json(newPatient);
  } catch (error: unknown) {
    let errorMessage = "Something went wrong.";
    if (error instanceof Error) {
      errorMessage += " Error: " + error.message;
    }
    res.status(400).send(errorMessage);
  }
});
