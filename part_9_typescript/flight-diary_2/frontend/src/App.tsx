import axios from "axios";
import { useEffect, useState } from "react"

interface Diary {
  id: number
  date: string
  weather: string
  visibility: string
  comment: string
}

const DiaryEntries = ({ diaries }: { diaries: Diary[] }) => {
  const entries = diaries.map((diary: Diary) => {
    return (
      <div key={diary.id}>
        <h3>{diary.date}</h3>
        <div>
          <p>visibility: {diary.visibility}</p>
          <p>weather: {diary.weather}</p>
          <p>comment: {diary.comment}</p>
        </div>
      </div>
    )
  })

  return (
    <>
      {entries}
    </>
  )
}


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
