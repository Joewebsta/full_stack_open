const calculateBmi = (height: number, weight: number) => {
  const heightInMeters: number = height / 100
  const BMI: number = weight / (heightInMeters * heightInMeters)

  if (BMI < 18.5) return 'Underweight'
  if (BMI >= 18.5 && BMI <= 24.9) return 'Normal Healthy Weight'
  if (BMI >= 25 && BMI <= 29.9) return 'Overweight'
  return 'Obese'
}

console.log(calculateBmi(180, 85))




