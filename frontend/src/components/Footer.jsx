import { useContext } from "react";
import { todoContext } from "../todoContext/TodoContext";

const Footer = () => {

  const { item } = useContext(todoContext);

  const completedTodos = item.filter(todo => todo.completed).length;
  const progress = item.length
    ? (completedTodos / item.length) * 100
    : 0;

  return (
    <div className="mt-6 text-white/80 text-sm">
      
      <div className="flex justify-between mb-1">
        <span>Progress</span>
        <span>{completedTodos} / {item.length}</span>
      </div>

      <div className="h-2 bg-white/20 rounded-full">
        <div
          className="h-2 bg-white rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

    </div>
  );
};

export default Footer;

  