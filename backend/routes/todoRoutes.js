const express = require("express")
const router = express.Router();

const {getTodo, deleteTodo, updateTodo, createTodo} = require("../controller/todoController")

router.get("/", getTodo)
router.post("/", createTodo)
router.delete("/:id", deleteTodo)
router.patch("/:id", updateTodo)

module.exports = router