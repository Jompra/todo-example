const Todo = require('../models/todo')

const todo_index_get = async (req, res) => {
    try {
        const allTodos = await Todo.find({}, 'title')
        
        if (allTodos.length){
            res.status(200).json(allTodos)
        } else {
            res.sendStatus(204)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

const todo_add_post = async (req, res) => {
    try {
        const todo = new Todo(req.body)
        await todo.save()
        res.status(201).json(todo)
    } catch (error) {
        res.status(500).json(error)
    }
}

const todo_detail_get = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id)
        res.status(200).json(todo)
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {
    todo_index_get,
    todo_add_post,
    todo_detail_get
}