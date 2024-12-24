const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
};

const Content = (props) => {
  return (
    <>
      <Part part={props.part1.part} exercise={props.part1.exercise} />
      <Part part={props.part2.part} exercise={props.part2.exercise} />
      <Part part={props.part3.part} exercise={props.part3.exercise} />
    </>
  );
};

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercise}
    </p>
  );
};

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.numberOfExercises}</p>
    </>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercise1 = 10;
  const part2 = "Using props to pass data";
  const exercise2 = 7;
  const part3 = "State of a component";
  const exercise3 = 14;

  return (
    <>
      <Header course={course} />
      <Content
        part1={{ part: part1, exercise: exercise1 }}
        part2={{ part: part2, exercise: exercise2 }}
        part3={{ part: part3, exercise: exercise3 }}
      />
      <Total numberOfExercises={exercise1 + exercise2 + exercise3} />
    </>
  );
};

export default App;
