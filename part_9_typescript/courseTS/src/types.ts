export interface HeaderProps {
  courseName: string;
}

export interface ContentProps {
  courseParts: CoursePart[];
}

export interface PartProps {
  coursePart: CoursePart;
}

export interface TotalProps {
  totalExercises: number;
}

// name
// exerciseCount
interface CoursePartBase {
  name: string;
  exerciseCount: number;
}

// name
// exerciseCount
// groupProjectCount
interface CoursePartGroup extends CoursePartBase {
  groupProjectCount: number;
  kind: "group";
}

// name
// exerciseCount
// description
interface CoursePartDescription extends CoursePartBase {
  description: string;
}

// name
// exerciseCount
// description
interface CoursePartBasic extends CoursePartDescription {
  kind: "basic";
}

// name
// exerciseCount
// description
// backgroundMaterial
interface CoursePartBackground extends CoursePartDescription {
  backgroundMaterial: string;
  kind: "background";
}

// name
// exerciseCount
// description
// requirements
interface CoursePartSpecial extends CoursePartDescription {
  requirements: string[];
  kind: "special";
}

export type CoursePart =
  | CoursePartBasic
  | CoursePartGroup
  | CoursePartBackground
  | CoursePartSpecial;
