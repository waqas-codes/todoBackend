import Header from "./components/Header";
import TodoList from "./components/TodoList";
import axios from "axios";
import Footer from "./components/Footer";
import AddTodo from "./components/AddTodo";
import { useState, useEffect } from "react";

function App() {
  const [item, setItem] = useState([])
  
  useEffect(() => {
    axios.get("http://localhost:3001/todo/")
      .then((res) => {
        setItem(res.data)
        console.log(res.data)
      }).catch(err => console.log(err))
  }, [])

  const handleAdd = (newTodo) => {
    setItem(prev => [...prev, newTodo]);
  };


  return (
    <div className="min-h-screen flex items-center justify-center 
      bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      
      <div className="w-[380px] p-6 rounded-3xl 
        bg-white/20 backdrop-blur-xl shadow-2xl border border-white/30">

        <Header />
        <AddTodo onAdd={handleAdd}/>
        <TodoList todo={item}/>
        <Footer />

      </div>
    </div>
  );
}

export default App;
