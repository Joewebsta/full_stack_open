import { CoursePart } from "../types";

const Total = ({ courseParts }: { courseParts: CoursePart[] }) => {
  const TotExerciseCount = courseParts.reduce((carry, part) => carry + part.exerciseCount, 0)

  return (
    <p>
      Number of exercises{" "}
      {TotExerciseCount}
    </p>
  )
}

export default Total;