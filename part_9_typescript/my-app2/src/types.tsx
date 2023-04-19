interface ICourseBase {
  name: string;
  exerciseCount: number;
}

interface ICourseGroup extends ICourseBase {
  groupProjectCount: number;
  kind: "group"
}

interface ICourseDescription extends ICourseBase {
  description: string;
}

interface ICourseBasic extends ICourseDescription {
  kind: "basic"
}

interface ICourseBackground extends ICourseDescription {
  backgroundMaterial: string;
  kind: "background"
}

interface ICourseSpecial extends ICourseDescription {
  requirements: string[]
  kind: "special"
}

export type ICourse = ICourseBasic | ICourseGroup | ICourseBackground | ICourseSpecial;