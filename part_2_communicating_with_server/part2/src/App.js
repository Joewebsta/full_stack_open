import React from 'react'

const Course = ({ course }) => {
  if (Object.keys(course).length === 0) {
    return <p>There are no courses.</p>
  }

  return (
    <>
      <Header text={course.name} />
      <Content parts={course.parts} />
    </>
  )
}

const Header = ({ text }) => <h1>{text}</h1>

const Content = ({ parts }) => {
  if (parts.length === 0) {
    return <p>There are no lessons.</p>
  }

  return parts.map(part => <Part key={part.id} part={part} />)
}


const Part = ({ part }) => <p>{part.name} {part.exercises}</p>

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App