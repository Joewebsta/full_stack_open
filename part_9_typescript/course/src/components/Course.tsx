import { CoursePart } from "../types"

const Course = ({ course }: { course: CoursePart }) => {
  return (
    <p>
      {course.name}{" "}
      {course.exerciseCount}
    </p>
  )
}

export default Course;