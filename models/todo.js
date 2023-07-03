const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String},
    daysToComplete: {type: Number, required: true}
}, {
    timestamps: true
})

const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo