import { ICourse } from "../types"

const Content = ({ courses }: { courses: ICourse[] }) => {

  const courseParagraphs = courses.map(({ name, exerciseCount }) => {
    return <p key={name}>{name} {exerciseCount}</p>
  })

  return (<>{courseParagraphs}</>)
}

export default Content