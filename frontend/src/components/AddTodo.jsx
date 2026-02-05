import axios from "axios";
import { useState, useContext, useRef, useEffect } from "react";
import { todoContext } from "../todoContext/TodoContext";

const AddTodo = ({ }) => {
  const [title, setTitle] = useState("")
  const { addTodos, editTodo, setEditTodo, updateTodo } = useContext(todoContext)
  const inputRef = useRef()
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    if (editTodo) {
      await updateTodo(editTodo.id, { title })
      setEditTodo("")
      setTitle("")
    } else {
      try {
        const res = await axios.post("http://localhost:3001/todo", {
          title: title,
          completed: false
        })
        console.log(res)
        addTodos(res.data)
        setTitle("")
      } catch (error) {
        console.log(error)
      }
    }
  }

  useEffect(() => {
    if (editTodo) {
      setTitle(editTodo.title);
      inputRef.current.focus();
    }
  }, [editTodo]);

  return (

    <form action="" onSubmit={handleSubmit} className="flex items-center bg-white/30 
        rounded-full px-4 py-2 mb-5 backdrop-blur-md">
      <input type="text" className="flex-1 bg-transparent 
            text-white placeholder-white/60 outline-none"
        placeholder="add a new todo..."
        value={title}
        ref={inputRef}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        type="submit"
        className="ml-3 px-5 py-1 rounded-full
          bg-gradient-to-r from-pink-500 to-purple-600
          text-white text-sm hover:scale-105 transition"
      >Add</button>
    </form>

  );
};

export default AddTodo;
