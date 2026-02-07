import { useContext } from "react";
import { todoContext } from "../todoContext/TodoContext";
import axios from 'axios'
import TodoItem from "./TodoItem";

const TodoList = () => {
const {item} = useContext(todoContext)
  
  console.log(item)
  return (
    <div className="space-y-3">
      {item.map(t => (
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
