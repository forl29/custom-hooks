import React, { useEffect, useReducer } from 'react'
import { todoReducer } from '../todoReducer'

export const useTodo = (initialState = []) => {

    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || []
    }

    const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))

    }, [todos])


    const handleNewTodo = (todo) => {

        const action = {
            type: 'Add Todo',
            payload: todo
        }

        dispatchTodo(action)
    }

    const handleRemoveTodo = (id) => {
        const action = {
            type: 'Remove Todo',
            payload: id
        }

        dispatchTodo(action)
    }

    const handleToggleToDo = (id) => {
        const action = {
            type: 'Toggle Todo',
            payload: id
        }

        dispatchTodo(action)
    }

    return {
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length,
        handleNewTodo,
        handleRemoveTodo,
        handleToggleToDo,
    }
}
