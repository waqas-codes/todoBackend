import Header from "./components/Header";
import TodoList from "./components/TodoList";
import axios from "axios";
import Footer from "./components/Footer";
import AddTodo from "./components/AddTodo";
import { useState, useEffect } from "react";
import { todoContext } from "./todoContext/TodoContext";

function App() {
  const [item, setItem] = useState([])

  const fetchTodos = () => {
    axios.get("http://localhost:3001/todo/")
      .then(res => setItem(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchTodos()
  }, [])


  const addTodos = (newTodo) => {
    setItem(prev => [...prev, newTodo]);
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/todo/${id}`)
      setItem(prev => prev.filter(todo => todo.id !== id));
    } catch (error) {
      console.log("the error is :", error)
    }
  }
  const updateTodo = async (id, todo) => {
    try {
      const res = await axios.put(`http://localhost:3001/todo/${id}`, todo)
    setItem(prev => 
      prev.map(item => item.id === id ? res.data : item)
    )
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <todoContext.Provider value = {{addTodos, deleteTodo, updateTodo, item}}>
      <div className="min-h-screen flex items-center justify-center 
      bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">

      <div className="w-[380px] p-6 rounded-3xl 
        bg-white/20 backdrop-blur-xl shadow-2xl border border-white/30">

        <Header />
        <AddTodo />
        <TodoList />
        <Footer />
      </div>
    </div>
    </todoContext.Provider>
  );
}

export default App;
