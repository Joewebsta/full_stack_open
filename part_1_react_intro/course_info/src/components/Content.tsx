import { Course, ContentProps } from "../types";

const Content = (props: ContentProps) => {
  const { courses } = props;

  const coursesArray = courses.map((course: Course) => {
    return (
      <p key={course.id}>
        {course.name}
        {" "}
        {course.totExercises}
      </p>
    );
  })

  return <div>{coursesArray}</div>
}

export default Content