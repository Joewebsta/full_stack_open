import patients from "../../data/patients";
import {  NewIPatient, INonSensitivePatient, IPatient } from "../types";
import {v4 as uuid} from 'uuid';

const getAllPatients = ():IPatient[] => {
  return patients;
};

const getAllNonSensitivePatients = (): INonSensitivePatient[] => {
  return patients.map(({id, name, dateOfBirth, gender, occupation}) => {
    return {id, name, dateOfBirth, gender, occupation};
  });
};

const addPatient = (patient: NewIPatient): IPatient => {
  
  const newPatient = {
    id: uuid(),
    ...patient
  };

  patients.push(newPatient);
  return newPatient;
};

export default {
  getAllPatients,
  getAllNonSensitivePatients,
  addPatient
};