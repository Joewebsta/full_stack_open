import Course from "./Course"
import { CoursePart } from "../types"

const Content = ({ courseParts }: { courseParts: CoursePart[] }) => {
  const courses = courseParts.map((course: CoursePart, index: number) => {
    return <Course key={index} course={course} />
  })

  return <div>{courses}</div>
}

export default Content;