export interface IDiagnoses {
  code: string;
  name: string;
  latin?: string;
}

export interface IPatient {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: string;
  occupation: string;
}

export type NewIPatient = Omit<IPatient, 'id'>;

export type INonSensitivePatient = Omit<IPatient, 'ssn'>;