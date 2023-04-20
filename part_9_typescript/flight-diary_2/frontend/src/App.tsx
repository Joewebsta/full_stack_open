import axios from "axios";
import { useEffect, useState } from "react"
import DiaryEntries from "./components/DiaryEntries";

function App() {
  const [diaries, setDiaries] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/api/diaries').then(response => {
      setDiaries(response.data)
    })
  }, [])

  return (
    <>
      <DiaryEntries diaries={diaries} />
    </>
  )
}

export default App
