import { BmiCategory } from "./types";

export function calculateBmi(height: number, weight: number): BmiCategory {
  if (!height || !weight) throw new Error("Please provide height and weight");

  const heightInMetersSquared = Math.pow(height / 100, 2);
  const bmi = weight / heightInMetersSquared;

  if (bmi < 18.5) {
    return "Underweight";
  }

  if (bmi <= 24.9) {
    return "Normal (healthy weight)";
  }

  if (bmi <= 29.9) {
    return "Overweight";
  }

  if (bmi <= 39.9) {
    return "Obese";
  }

  return "Severely Obese";
}

// console.log(calculateBmi(process.argv));
