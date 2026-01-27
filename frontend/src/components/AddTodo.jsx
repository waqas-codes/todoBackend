import axios from "axios";
import { useState } from "react";

const AddTodo = ({onAdd}) => {
  const [title, setTitle] = useState("")
    
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!title.trim()) return;

    try {
      const res = await axios.post("http://localhost:3001/todo", {
        title: title,
        completed: false
      })
      console.log(res)
      onAdd(res.data)
      setTitle("")
    } catch (error) {
      console.log(error)
    }
  }

    return (
  
       <form action="" onSubmit={handleSubmit} className="flex items-center bg-white/30 
        rounded-full px-4 py-2 mb-5 backdrop-blur-md">
        <input type="text" className="flex-1 bg-transparent 
            text-white placeholder-white/60 outline-none"
            placeholder="add a new todo..."
            value={title}
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
  