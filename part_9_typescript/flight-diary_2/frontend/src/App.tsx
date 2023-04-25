import axios from "axios";
import { useEffect, useState } from "react"
import DiaryEntries from "./components/DiaryEntries";
import { Diary } from "./types";


const DiaryCreation = ({
  createDiary,
  setDate,
  setVisibility,
  setWeather,
  setComment
}: {
  createDiary: any,
  setDate: React.Dispatch<React.SetStateAction<string>>,
  setVisibility: React.Dispatch<React.SetStateAction<string>>,
  setWeather: React.Dispatch<React.SetStateAction<string>>,
  setComment: React.Dispatch<React.SetStateAction<string>>
}) => {
  return (
    <>
      <h3>Add new entry</h3>
      <form action="" onSubmit={createDiary}>
        <div>
          <label htmlFor="date">date</label>
          <input onChange={e => setDate(e.target.value)} type="text" name="date" id="date" />
        </div>
        <div>
          <label htmlFor="visibility">visibility</label>
          <input onChange={e => setVisibility(e.target.value)} type="text" name="visibility" id="visibility" />
        </div>
        <div>
          <label htmlFor="weather">weather</label>
          <input onChange={e => setWeather(e.target.value)} type="text" name="weather" id="weather" />
        </div>
        <div>
          <label htmlFor="weather">comment</label>
          <input onChange={e => setComment(e.target.value)} type="text" name="comment" id="comment" />
        </div>
        <button>add</button>
      </form>
    </>
  )
}


function App() {
  const [diaries, setDiaries] = useState<Diary[]>([])
  const [date, setDate] = useState("")
  const [visibility, setVisibility] = useState("")
  const [weather, setWeather] = useState("")
  const [comment, setComment] = useState("")

  const createDiary = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    axios.post('http://localhost:3000/api/diaries', {
      date,
      visibility,
      weather,
      comment
    }).then(response => {
      setDate('');
      setVisibility('');
      setWeather('');
      setComment('');
      setDiaries(diaries.concat(response.data));
    })


  }

  useEffect(() => {
    axios.get<Diary[]>('http://localhost:3000/api/diaries').then(response => {
      setDiaries(response.data as Diary[])
    })
  }, [])

  return (
    <>
      <DiaryCreation
        createDiary={createDiary}
        setDate={setDate}
        setWeather={setWeather}
        setVisibility={setVisibility}
        setComment={setComment}
      />
      <DiaryEntries diaries={diaries} />
    </>
  )
}

export default App
