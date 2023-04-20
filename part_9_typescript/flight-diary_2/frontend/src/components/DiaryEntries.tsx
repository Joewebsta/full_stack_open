import { Diary } from "../types"

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

  return <>{entries}</>
}

export default DiaryEntries