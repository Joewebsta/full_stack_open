import patients from "../../data/patients";
import { INonSensitivePatient, IPatient } from "../types";

const getAllPatients = ():IPatient[] => {
  return patients;
};

const getAllNonSensitivePatients = (): INonSensitivePatient[] => {
  return patients.map(({id, name, dateOfBirth, gender, occupation}) => {
    return {id, name, dateOfBirth, gender, occupation};
  });
};

export default {
  getAllPatients,
  getAllNonSensitivePatients
};