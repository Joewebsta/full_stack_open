import { ICourse } from "../types";

const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
};

const Course = ({ course }: { course: ICourse }) => {
  const emStyles = {
    display: 'block'
  };

  const pStyles = {
    fontWeight: 'bold'
  }

  switch (course.kind) {
    case "basic":
      return (
        <>
          <p key={course.name} style={pStyles}>
            {course.name}{" "}
            {course.exerciseCount}
            <em style={emStyles}>{course.description}</em>
          </p>
        </>
      )
    case "group":
      return (
        <>
          <p key={course.name}>
            {course.name} {course.exerciseCount}
            <span style={emStyles}>project exercises {course.groupProjectCount}</span>

          </p>
        </>
      )
    case "background":
      return (
        <p key={course.name}>
          {course.name} {course.exerciseCount}
          <em style={emStyles}>{course.description}</em>
          <span style={emStyles}>submit to {course.backgroundMaterial}</span>

        </p>
      )
    case "special":
      return (
        <p key={course.name}>
          {course.name} {course.exerciseCount}
          <em style={emStyles}>{course.description}</em>
          <span style={emStyles}>required skills: {course.requirements.join(', ')}</span>
        </p>
      )
    default:
      return assertNever(course)
  }
}


export default Course;