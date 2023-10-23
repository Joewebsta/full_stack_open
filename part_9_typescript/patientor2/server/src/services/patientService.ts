import { Patient, NonSensitivePatient } from "../types";
import patientData from "../../data/patients";
const { v4: uuidv4 } = require("uuid");

export function getPatients(): Patient[] {
  return patientData;
}

export function getNonSensitivePatients(): NonSensitivePatient[] {
  return patientData.map(({ id, name, dateOfBirth, gender, occupation }) => {
    return {
      id,
      name,
      dateOfBirth,
      gender,
      occupation,
    };
  });
}

export function addPatient(newPatient: Patient): Patient {
  newPatient.id = uuidv4();
  patientData.push(newPatient);
  return newPatient;
}
