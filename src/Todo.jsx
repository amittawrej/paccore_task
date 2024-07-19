import React, { useEffect, useRef, useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const inputRef = useRef(null);
  const fetchData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    console.log(data);
    setTodo(data);
    console.log(todo);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    const input = inputRef.current.value;
    const newTodos = { id: todo.length + 1, title: input };
    console.log(newTodos);
    setTodo([newTodos, ...todo]);
    inputRef.current.value = "";
  };

  return (
    <div>
      <h1>List</h1>
      <form onSubmit={handleClick}>
        <input ref={inputRef} type="text" placeholder="Todos" />
        <button type="submit"> Add Todo</button>
      </form>
      <ol>
        {todo &&
          todo.map((item) => (
            <div key={item.id}>
              <li>{item.title}</li>
            </div>
          ))}
      </ol>
    </div>
  );
};

export default Todo;
