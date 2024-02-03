/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState([
    {
      title: "a",
      id: 1,
      description: "hello 1",
    },
    {
      title: "ap",
      id: 2,
      description: "hello 2",
    },
    {
      title: "appp",
      id: 3,
      description: "hello 3",
    },
    {
      title: "apppppp",
      id: 4,
      description: "hello 4",
    },
  ]);

  setTimeout(() => {
    setTodo([
      {
        title: "joekr 0",
        id: 1,
        description: "des4",
      },
      {
        title: "joker 1",
        id: 2,
        description: "hfasdf",
      },
      {
        title: "joker 2",
        id: 3,
        description: "helloasfasdfas 3",
      },
      {
        title: "joker 3",
        id: 4,
        description: "hfasfsadello",
      },
    ]);
  }, 5000);

  return (
    <>
      <h1>Hello World!</h1>
      {todo.map((value) => {
        return <Todo todo={value} />;
      })}
    </>
  );
}

function Todo(props) {
  return (
    <div>
      {props.todo.title} && {props.todo.id}
      <br />
      {props.todo.description}
      <br />
      <br />
    </div>
  );
}

export default App;
