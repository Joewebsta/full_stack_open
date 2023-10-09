interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

function countNonZeroExerciseDays(dailyExerciseHours: number[]): number {
  return dailyExerciseHours.filter((day) => day > 0).length;
}

function calculateAverageDailyExerciseHours(
  dailyExerciseHours: number[]
): number {
  if (!dailyExerciseHours.length) return 0;

  const hoursSum = dailyExerciseHours.reduce((sum, num) => sum + num, 0);
  const totalDays = dailyExerciseHours.length;
  return hoursSum / totalDays;
}

function createRating(target: number, average: number): number {
  const rating1Ceiling = target / 2;
  const rating2Ceiling = target;

  if (average < rating1Ceiling) {
    return 1;
  }

  if (average < rating2Ceiling) {
    return 2;
  }

  return 3;
}

function createRatingDescription(rating: number): string {
  switch (rating) {
    case 1:
      return "You have a lot more work to do.";
    case 2:
      return "Not too bad but could be better";
    default:
      return "You met your target!";
  }
}

function calculateExercises(
  dailyExerciseHours: number[],
  dailyExerciseTarget: number
): Result {
  const target = dailyExerciseTarget;
  const periodLength = dailyExerciseHours.length;
  const trainingDays = countNonZeroExerciseDays(dailyExerciseHours);
  const average = calculateAverageDailyExerciseHours(dailyExerciseHours);
  const success = average >= target;
  const rating = createRating(target, average);
  const ratingDescription = createRatingDescription(rating);

  return {
    target,
    periodLength,
    trainingDays,
    average,
    success,
    rating,
    ratingDescription,
  };
}

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2));
calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2);

