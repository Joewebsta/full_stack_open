import { ICourse, IPart } from "../types";

const Course = ({ course }: { course: ICourse }) => {
  const { name, parts }: { name: string, parts: IPart[] } = course;

  return (
    <div>
      <Header name={name} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

const Header = ({ name }: { name: string }) => <h1>{name}</h1>

const Content = ({ parts }: { parts: IPart[] }) => {
  const partsList = () => parts.map(part => <Part key={part.id} part={part} />);

  return <div>{partsList()}</div>
}

const Part = ({ part }: { part: IPart }) => {
  const { name, exercises }: { name: string, exercises: number } = part;
  return <p>{name}{" "}{exercises}</p>
}

const Total = ({ parts }: { parts: IPart[] }) => {
  const totalExercises = () => {
    return parts.reduce((sum, part) => sum + part.exercises, 0);
  }

  return <p>total of {totalExercises()} exercises</p>;
}

export default Course;