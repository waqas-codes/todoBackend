const Todo = require("../models/todoModel")

const getTodo = async (req, res) => {
    const todos = await Todo.find();
    res.send(todos)
}

const createTodo = async (req, res) => {
    try {
        const { title, completed } = req.body;

        if (!title) return res.status(400).json({ message: "title is required" })

        const lastTodo = await Todo.findOne().sort({ id: -1 });

        const newId = lastTodo ? lastTodo.id + 1 : 1;

        const newTodo = await Todo.create({
            title,
            id: newId
        });
        res.send(newTodo)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteTodo = async (req, res) => {
    try {
        const deleteTodo = await Todo.findOneAndDelete({
            id: Number(req.params.id)
        })
        if (!deleteTodo) return res.status(404).json({ message: "todo was not found" })
        res.json({ message: "Deleted" })
    } catch (error) {
        res.send(error)
    }
}


const updateTodo = async (req, res) => {
    try {
        const id = (req.params.id)
        const { title, completed } = req.body

        const todo = await Todo.findOne({id})

        if (!todo) return res.status(404).send({ message: "todo was not found" })

        if (title !== undefined) todo.title = title
        if (completed !== undefined) todo.completed = completed

        await todo.save()

        res.send(todo)
    } catch (error) {
        console.log(error)
    }
}

module.exports = { getTodo, createTodo, updateTodo, deleteTodo }