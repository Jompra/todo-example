import React, { useState } from 'react'
import axios from 'axios'

export default function TodoCreate(){

    const [newTodo, setNewTodo] = useState({})
    const [userMessage, setUserMessage] = useState('')
    

    const handleChange = (event) => {
        const attribute = event.target.name
        const value = event.target.value
        console.log(attribute, value)

        const currentNewTodo = {...newTodo}
        
        currentNewTodo[attribute] = value
        
        setNewTodo(currentNewTodo)
        console.log(newTodo)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        const response = await axios.post('todo/add', newTodo)
        console.log(response)

        if (response.status === 201){
            setUserMessage('Your Todo Has Been Added')
        } else {
            setUserMessage('Something Went Wrong')
        }
    }

    return (
        <div>
            <h1>Create Todo!</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <input
                        type="text"
                        name="title"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Description</label>
                    <input
                        type="text"
                        name="description"
                        onChange={handleChange}
                    />
                </div>
    
                <div>
                    <label>Days to complete</label>
                    <input
                        type="text"
                        name="daysToComplete"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        type="submit"
                        value="Add Todo!"
                    />
                </div>
            </form>
            <p>{userMessage}</p>
        </div>
    )
}