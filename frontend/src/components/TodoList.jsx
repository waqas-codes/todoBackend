import { useEffect, useState } from "react";
import axios from 'axios'
import TodoItem from "./TodoItem";

const TodoList = ({todo, onDelete}) => {

  // const handleRemove = async (id) => {
  //   onDelete(id)
  // }
  
  console.log(todo)
  return (
    <div className="space-y-3">
      {todo.map(t => (
        <TodoItem
          key={t.id}
          id={t.id}
          // onDelete={handleRemove}
          title={t.title}
          completed={t.completed}
          />
      ))}
    </div>
  );
};

export default TodoList;
