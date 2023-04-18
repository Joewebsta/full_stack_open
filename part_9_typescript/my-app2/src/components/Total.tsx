import { ICourse } from "../types";

const Total = ({ courses }: { courses: ICourse[] }) => {
  const courseTotal = courses.reduce((total, course) => {
    const { exerciseCount } = course;
    return total + exerciseCount
  }, 0)

  return (
    <p>
      Number of exercises{" "}
      {courseTotal}
    </p>
  )
}

export default Total