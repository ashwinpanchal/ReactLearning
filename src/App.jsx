import { useState } from "react"

function App() {
  const [todo,setTodo] = useState({
    title: "a",
    id: 1,
    description: "hello"
  });

  setTimeout(()=>{
    let random = Math.random();
    setTodo({title: "Joker",id: random,description: "sdasdasd"});
  },2000);

  return (
    <>
    <h1>Hello World!</h1>
    <Todo todo={todo}/>
    </>
  )
}

function Todo(props){
  return <div>
    {props.todo.title}
    <br/>
    {props.todo.id}
    <br/>
    {props.todo.description}
  </div>
}

export default App
