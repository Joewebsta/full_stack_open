interface ExerciseValues {
  targetAmount: number,
  dailyExerciseHours: number[]
}

const parseArguments = (args: string[]): ExerciseValues => {
  if (args.length < 4) throw new Error('Not enough arguments')

  const [targetAmount, ...dailyExerciseHours] = [...process.argv].slice(2).map(arg => Number(arg))

  if (isNaN(Number(targetAmount))) {
    throw new Error('Target amount is not a number!')
  }

  if (!dailyExerciseHours.every(dailyHours => !isNaN(dailyHours))) {
    throw new Error('One or more daily exercises hours is not a number')
  }

  return { targetAmount, dailyExerciseHours }
}

export default parseArguments