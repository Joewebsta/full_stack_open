type BmiCategory =
  | "Underweight"
  | "Normal (healthy weight)"
  | "Overweight"
  | "Obese"
  | "Severely Obese";

function parseArguments(args: string[]) {
  return args.slice(2, 4).map((arg) => Number(arg));
}
function calculateBmi(args: string[]): BmiCategory {
  const [height, weight] = parseArguments(args);
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

console.log(calculateBmi(process.argv));
