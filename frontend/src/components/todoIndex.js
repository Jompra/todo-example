import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function TodoIndex() {

    const [todos, setTodos] = useState([])

    useEffect(() => {
        getAllTodos()
    }, [])

    const getAllTodos = async () => {
        const response = await axios.get('todo/index')
        setTodos(response.data)
    }

    const allTodos = todos.map(todo => {
        return (
            <div key={todo._id}>
                <h3>{todo.title}</h3>
            </div>
        )
    })

    return (
        <>
            {allTodos}
        </>




    )
}