import { ContentProps } from "../types";

const Total = (props: ContentProps) => {
  const { courses } = props;
  const TotalExercises = courses.reduce((sum, course) => {
    return sum + course.totExercises;
  }, 0)

  return <p>Number of exercises {TotalExercises}</p>
}

export default Total