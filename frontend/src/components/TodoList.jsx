import { useEffect, useState } from "react";
import axios from 'axios'
import TodoItem from "./TodoItem";

const TodoList = ({todo}) => {

  const handleRemove = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:3001/todo/${id}`)
    } catch (error) {
      console.log("the error is :", error)
    }
  }
  console.log(todo)
  return (
    <div className="space-y-3">
      {todo.map(t => (
        <TodoItem
          key={t.id}
          id={t.id}
          onDelete={handleRemove}
          title={t.title}
          completed={t.completed}
          />
      ))}
    </div>
  );
};

export default TodoList;
