interface Result {
  periodLength: number,
  trainingDays: number,
  success: boolean,
  rating: number,
  ratingDescription: string,
  target: number,
  average: number
}

const calculateExercises = (dailyExerciseHours: number[], targetAmount: number): Result => {
  const periodLength = dailyExerciseHours.length
  const trainingDays = dailyExerciseHours.filter(hours => hours > 0).length
  const totalHours = dailyExerciseHours.reduce((sum, hours) => sum + hours, 0)
  const average = totalHours / periodLength
  const success = targetAmount === average
  const rating = 2
  const ratingDescription = 'not too bad but could be better'

  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target: targetAmount,
    average
  }
}

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2));