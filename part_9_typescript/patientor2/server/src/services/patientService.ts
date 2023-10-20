import { Patient, NonSensitivePatient } from "../types";
import patientData from "../../data/patients";

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
