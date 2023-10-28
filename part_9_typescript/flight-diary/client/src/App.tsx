import { useState, useEffect } from "react";
import axios from "axios";
import { DiaryEntry } from "./types";
import "./App.css";

function App() {
  const [diaryEntries, setDiaryEntries] = useState<DiaryEntry[]>([]);

  useEffect(() => {
    const getDiaryEntries = async () => {
      const response = await axios.get<DiaryEntry[]>(
        "http://localhost:3000/api/diaries"
      );
      setDiaryEntries(response.data);
    };

    getDiaryEntries();
  }, []);

  return (
    <>
      <h1>Hello world!</h1>
    </>
  );
}

export default App;
