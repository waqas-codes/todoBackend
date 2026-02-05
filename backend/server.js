// const express = require("express")
// const cors = require('cors')
// const app = express()
// app.use(express.json())
// app.use(cors())

// let idd = 1
// const todos = [
//     {
//         id: idd,
//         title: "english",
//         completed: false
//     }
// ]
// app.get("/todo", (req, res) => {
//     res.send(todos)
// })

// app.post("/todo", (req, res) => {
//     const data = req.body
//     idd++
    
//     data.id = idd
//     todos.push(data)
//     res.send(data)

// })

// app.patch("/todo/:id", (req, res) => {
//     const id = Number(req.params.id)
//     const { title, completed } = req.body

//     const todo = todos.find(t => t.id == id)

//     if(!todo) return res.status(404).send("todo was not found!")

//     if(title !== undefined) todo.title = title
//     if(completed !== undefined) todo.completed = completed

//     res.send(todo)
// })

// app.delete("/todo/:id", (req, res) => {
//     const id = req.params.id

//     const index = todos.findIndex(t => t.id == id)

//     if(index === -1) {
//         res.status(404).send("todo was not found")
//     }

    
//     const deleteTodo = todos.splice(index, 1)

//     res.send("todo was successfully deleted!")
// })

// app.listen(3001, () => {
//     console.log("server is running!")
// })