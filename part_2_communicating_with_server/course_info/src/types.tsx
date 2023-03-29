export interface IPart {
  name: string;
  exercises: number;
  id: number
}

export interface ICourse {
  id: number;
  name: string;
  parts: IPart[];
}

export interface ICourses extends Array<ICourse> { }
