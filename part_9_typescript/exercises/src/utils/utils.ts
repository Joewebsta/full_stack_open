export function countNonZeroExerciseDays(dailyExerciseHours: number[]): number {
  return dailyExerciseHours.filter((day) => day > 0).length;
}

export function calculateAverageDailyExerciseHours(
  dailyExerciseHours: number[]
): number {
  if (!dailyExerciseHours.length) return 0;

  const hoursSum = dailyExerciseHours.reduce((sum, num) => sum + num, 0);
  const totalDays = dailyExerciseHours.length;
  return hoursSum / totalDays;
}

export function parseArguments(args: string[]): number[] {
  return args.slice(2).map((arg) => Number(arg));
}