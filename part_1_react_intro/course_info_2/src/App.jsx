import React from 'react'
import { useState } from 'react'
import './App.css'

import Header from './components/Header'

function App() {
  const course = 'Half Stack application development';

  return (
    <>
      <Header course={course} />
    </>
  )
}

export default App
