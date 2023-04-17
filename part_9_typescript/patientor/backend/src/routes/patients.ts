import express from "express";
import patientService from "../services/patientServices";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send(patientService.getAllNonSensitivePatients());
});

router.post('/', (req, res) => {
  /* eslint-disable @typescript-eslint/no-unsafe-assignment */
  const { name, occupation, ssn, dateOfBirth, gender } = req.body;
  const addedPatient = patientService.addPatient({
    name,
    occupation,
    ssn,
    dateOfBirth,
    gender
});

  res.json(addedPatient);
});

export default router;

