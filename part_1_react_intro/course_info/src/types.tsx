export interface Course {
  id: number
  name: String;
  totExercises: number;
}

export interface ContentProps {
  courses: Course[];
}