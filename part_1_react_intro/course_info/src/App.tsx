import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";
import { allCourses } from "./data/courses";
import { Course } from "./types";

const App = () => {
  const courses: Course[] = allCourses;

  return (
    <div>
      <Header />
      <Content courses={courses} />
      <Total courses={courses} />
    </div>
  )
}

export default App