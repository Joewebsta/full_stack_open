import { createRating, createRatingDescription } from "./utils/rating";
import {
  countNonZeroExerciseDays,
  calculateAverageDailyExerciseHours,
  parseArguments,
} from "./utils/utils";

import { Result } from "./types";

function calculateExercises(args: string[]): Result {
  if (args.length <= 2) {
    throw new Error("Please provide daily target and daily exercise hours.");
  }

  if (args.length === 3) {
    throw new Error("Please provide daily exercise hours.");
  }

  const [target, ...dailyExerciseHours] = parseArguments(args);
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

try {
  console.log(calculateExercises(process.argv));
} catch (error: unknown) {
  if (error instanceof Error) {
    console.log(`Error: ${error.message}`);
  }
}
