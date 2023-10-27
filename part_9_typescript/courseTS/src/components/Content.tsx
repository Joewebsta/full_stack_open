import { ContentProps, PartProps } from "../types";

export const Content = (props: ContentProps) => {
  return (
    <>
      {props.courseParts.map((coursePart, index) => {
        return <Part key={index} coursePart={coursePart} />;
      })}
    </>
  );
};

const Part = (props: PartProps) => {
  switch (props.coursePart.kind) {
    case "basic":
      return (
        <div>
          <p style={{ marginBottom: 0 }}>
            <b>{`${props.coursePart.name} ${props.coursePart.exerciseCount}`}</b>
          </p>
          <p style={{ marginTop: 0 }}>
            <em>{props.coursePart.description}</em>
          </p>
        </div>
      );
    case "background":
      return (
        <div>
          <p style={{ marginBottom: 0 }}>
            <b>{`${props.coursePart.name} ${props.coursePart.exerciseCount}`}</b>
          </p>
          <p style={{ margin: 0 }}>
            <em>{props.coursePart.description}</em>
          </p>
          <p style={{ marginTop: 0 }}>
            {`Submit to ${props.coursePart.backgroundMaterial}`}
          </p>
        </div>
      );
    case "group":
      return (
        <div>
          <p style={{ marginBottom: 0 }}>
            <b>{`${props.coursePart.name} ${props.coursePart.exerciseCount}`}</b>
          </p>
          <p style={{ marginTop: 0 }}>
            {`project exercises ${props.coursePart.groupProjectCount}`}
          </p>
        </div>
      );
    case "special":
      return (
        <div>
          <p style={{ marginBottom: 0 }}>
            <b>{`${props.coursePart.name} ${props.coursePart.exerciseCount}`}</b>
          </p>
          <p style={{ marginTop: 0 }}>
            {`project exercises: ${props.coursePart.requirements.join(", ")}`}
          </p>
        </div>
      );
    default:
      return assertNever(props.coursePart);
  }
};

const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
};
