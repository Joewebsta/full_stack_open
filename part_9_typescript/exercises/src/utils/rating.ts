export function createRating(target: number, average: number): number {
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

export function createRatingDescription(rating: number): string {
  switch (rating) {
    case 1:
      return "You have a lot more work to do.";
    case 2:
      return "Not too bad but could be better";
    default:
      return "You met your target!";
  }
}
