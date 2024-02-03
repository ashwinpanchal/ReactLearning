/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";

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

  useEffect(() => {
    console.log("Inside Use Effect");
    setInterval(() => {
      setTodo([
        {
          title: "joekr 0",
          id: Math.floor(Math.random() * 100),
          description: "des4",
        },
        {
          title: "joker 1",
          id: Math.floor(Math.random() * 100),
          description: "hfasdf",
        },
        {
          title: "joker 2",
          id: Math.floor(Math.random() * 100),
          description: "helloasfasdfas 3",
        },
        {
          title: "joker 3",
          id: Math.floor(Math.random() * 100),
          description: "hfasfsadello",
        },
      ]);
    }, 1000);
  }, []);

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
