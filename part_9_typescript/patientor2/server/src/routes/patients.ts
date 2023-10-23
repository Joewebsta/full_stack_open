import express from "express";
import { getNonSensitivePatients, addPatient } from "../services/patientService";

export const patientRouter = express.Router();

patientRouter.get("/", (_req, res) => {
  res.send(getNonSensitivePatients());
});

patientRouter.post("/", (req, res) => {
  // get the data from the request
  const patient = req.body;
  // pass the data to the "addPatient" function (patientService)
  const newPatient = addPatient(patient);
  // return the created user to the client
  res.json(newPatient);
});
