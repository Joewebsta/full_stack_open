import { Diagnosis } from "../types";
import diagnosesData from "../../data/diagnoses";

export function getDiagnoses(): Diagnosis[] {
  return diagnosesData;
}
