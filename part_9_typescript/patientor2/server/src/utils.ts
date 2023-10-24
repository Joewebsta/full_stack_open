import { NewPatient, Gender } from "./types";

export function toNewPatient(object: unknown) {
  if (!object || typeof object !== "object") {
    throw new Error("Incorrect or missing data");
  }

  if (
    "name" in object &&
    "dateOfBirth" in object &&
    "ssn" in object &&
    "gender" in object &&
    "occupation" in object
  ) {
    const patient: NewPatient = {
      name: parseName(object.name),
      dateOfBirth: parseDateOfBirth(object.dateOfBirth),
      ssn: parseSSN(object.ssn),
      gender: parseGender(object.gender),
      occupation: parseOccupation(object.occupation),
    };

    return patient;
  }

  throw new Error("Incorrect data: some fields are missing");
}

function parseGender(gender: unknown): string {
  if (!isString(gender) || !isGender(gender)) {
    throw new Error("Incorrect or missing gender");
  }

  return gender;
}

function parseOccupation(occupation: unknown): string {
  if (!isString(occupation)) {
    throw new Error("Incorrect or missing occupation");
  }

  return occupation;
}
function parseSSN(ssn: unknown): string {
  if (!isString(ssn) || !isSSN(ssn)) {
    throw new Error("Incorrect or missing ssn");
  }

  return ssn;
}

function parseDateOfBirth(date: unknown): string {
  if (!isString(date) || !isDate(date)) {
    throw new Error("Incorrect or missing date");
  }

  return date;
}

function parseName(name: unknown): string {
  if (!isString(name)) {
    throw new Error("Incorrect or missing name");
  }

  return name;
}

function isString(text: unknown): text is string {
  return typeof text === "string" || text instanceof String;
}

function isDate(date: string): boolean {
  return Boolean(Date.parse(date));
}

function isSSN(ssn: string): boolean {
  return /[0-9]{3}-[0-9]{2}-[0-9]{4}/.test(ssn);
}

function isGender(param: string): param is Gender {
  return Object.values(Gender)
    .map((value) => value.toString())
    .includes(param);
}
