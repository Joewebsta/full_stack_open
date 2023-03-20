import parseArguments from './utils'

interface Result {
  periodLength: number,
  trainingDays: number,
  success: boolean,
  rating: number,
  ratingDescription: string,
  target: number,
  average: number
}

const calculateExercises = (targetAmount: number, dailyExerciseHours: number[]): Result => {
  const periodLength: number = dailyExerciseHours.length
  const trainingDays: number = dailyExerciseHours.filter(hours => hours > 0).length
  const totalHours: number = dailyExerciseHours.reduce((sum, hours) => sum + hours, 0)
  const average: number = totalHours / periodLength
  const success: boolean = targetAmount === average
  const rating: number = 2
  const ratingDescription: string = 'not too bad but could be better'

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

try {
  const { targetAmount, dailyExerciseHours } = parseArguments(process.argv)
  console.log(calculateExercises(targetAmount, dailyExerciseHours));
} catch (error: unknown) {
  let errorMessage = 'Something bad happened.'
  if (error instanceof Error) {
    errorMessage += ' Error: ' + error.message;
  }
  console.log(errorMessage);
}