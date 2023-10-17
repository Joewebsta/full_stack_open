import { createRating, createRatingDescription } from "./utils/rating";
import {
  countNonZeroExerciseDays,
  calculateAverageDailyExerciseHours,
} from "./utils/utils";

import { Result } from "./types";

export function calculateExercises(
  dailyExerciseHours: number[],
  target: number
): Result {
  if (dailyExerciseHours.length <= 2) {
    throw new Error("Please provide daily target and daily exercise hours.");
  }

  if (dailyExerciseHours.length === 3) {
    throw new Error("Please provide daily exercise hours.");
  }

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
