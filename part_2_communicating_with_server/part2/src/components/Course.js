import React from "react"

const Course = ({ course }) => (
  <div>
    <Header text={course.name} />
    <Content parts={course.parts} />
    <Statistics parts={course.parts} />
  </div>
)

const Header = ({ text }) => <h1>{text}</h1>

const Content = ({ parts }) => {
  if (parts.length === 0) return <p>There are no lessons.</p>

  return parts.map(part => <Part key={part.id} part={part} />)
}

const Part = ({ part }) => <p>{part.name} {part.exercises}</p>

const Statistics = ({ parts }) => {
  const totalExercises = parts.reduce((total, { exercises }) => total + exercises, 0)

  return <b><p>total of {totalExercises} exercises</p></b>
}

export default Course
