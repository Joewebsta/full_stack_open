import diaries from "../../data/diaries";

import { NonSensitiveDiaryEntry } from "../types";
// import { DiaryEntry, NonSensitiveDiaryEntry } from "../types";

const getEntries = () => {
  return diaries;
};

const getNonSensitiveEntries = (): NonSensitiveDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => ({
    id,
    date,
    weather,
    visibility,
  }));
};

// const addDiary = (): DiaryEntry => {
//   return [];
// };

const addDiary = () => {
  return [];
};

export default {
  getEntries,
  getNonSensitiveEntries,
  addDiary,
};
