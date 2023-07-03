const express = require('express')
const router = express.Router()

const todoCtrl = require('../controllers/todo')

router.get('/todo/index', todoCtrl.todo_index_get)

router.post('/todo/add', todoCtrl.todo_add_post)

router.get('/todo/:id', todoCtrl.todo_detail_get)

module.exports = router