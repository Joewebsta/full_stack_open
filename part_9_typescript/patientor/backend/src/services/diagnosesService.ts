import diagnoses from '../../data/diagnoses';
import { IDiagnoses } from '../types';


const getDiagnoses = ():IDiagnoses[] => {
  return diagnoses;
};

const addDiagnoses = () => {
  return null;
};


export default {
  getDiagnoses,
  addDiagnoses
};