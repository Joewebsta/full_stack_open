import { ICourse } from "../types"
import Course from "./Course"

const Content = ({ courses }: { courses: ICourse[] }) => {

  const courseParagraphs = courses.map(course => {
    return <Course course={course} />
  })

  return (<>{courseParagraphs}</>)
}

export default Content