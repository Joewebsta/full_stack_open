export interface HeaderProps {
  courseName: string;
}

interface Course {
  name: string;
  exerciseCount: number;
}

export interface ContentProps {
  courseParts: Course[];
}

export interface TotalProps {
  totalExercises: number;
}
