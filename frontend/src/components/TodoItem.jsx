import axios from "axios";
import { todoContext } from "../todoContext/TodoContext";
import { useContext, useState } from "react";
const TodoItem = ({ id, title }) => {
  
  const { deleteTodo, updateTodo } = useContext(todoContext);
  const [checked, setChecked] = useState(false)
  const handleClick = () => {
    deleteTodo(id)
  }

  const handleEdit = () => {
    
  }
    return (
    
      <div className="flex justify-between items-center
        px-4 py-3 rounded-2xl bg-white/25
        backdrop-blur-md text-white
        hover:bg-white/35 transition">
  
        <div className="flex items-center gap-3 w-full">
          <input type="checkbox" 
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          />
          <span className={checked ? "line-through opacity-60" : ""}>
            {title}
          </span>
        </div>

        <button className="text-white/70 hover:text-red-900 rounded-sm mx-2"
        onClick={handleEdit}
        >
          ✏️
        </button>
  
        <button className="text-white/70 hover:text-red-300"
        onClick={handleClick}
        >
          ✕
        </button>
      </div>
    );
  };
  
  export default TodoItem;
  