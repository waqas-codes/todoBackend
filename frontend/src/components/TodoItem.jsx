import axios from "axios";
import { todoContext } from "../todoContext/TodoContext";
import { useContext } from "react";
const TodoItem = ({ id, title, completed }) => {
  
  const { deleteTodo } = useContext(todoContext);
  const handleClick = () => {
    deleteTodo(id)
  }
    return (
    
      <div className="flex justify-between items-center
        px-4 py-3 rounded-2xl bg-white/25
        backdrop-blur-md text-white
        hover:bg-white/35 transition">
  
        <div className="flex items-center gap-3">
          <input type="checkbox" defaultChecked={completed} />
          <span className={completed ? "line-through opacity-60" : ""}>
            {title}
          </span>
        </div>
  
        <button className="text-white/70 hover:text-red-300"
        onClick={handleClick}
        >
          ✕
        </button>
      </div>
    );
  };
  
  export default TodoItem;
  