import { Course, ContentProps } from "../types";

const Content = (props: ContentProps) => {
  const { courses } = props;

  const renderCourses = () => {
    return courses.map((course: Course) => {
      return (
        <p key={course.id}>
          {course.name}
          {" "}
          {course.totExercises}
        </p>
      );
    })
  }

  return <div>{renderCourses()}</div>
}

export default Content