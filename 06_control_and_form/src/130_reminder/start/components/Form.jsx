import React from 'react'
import { useState } from 'react'

const Form = ({ createTodo }) => {
  const [enteredTodo, setEnteredTodo] = useState('')

  const addTodo = (e) => {
    e.preventDefault()
    const newTodo = {
      id: Math.floor(Math.random() * 1e5),
      content: enteredTodo
    }

    createTodo(newTodo)
    setEnteredTodo("")
  }

  return (
    <div>
      <form onSubmit={addTodo}>
        <input type="text" onChange={(e) => setEnteredTodo(e.target.value)} value={enteredTodo} />
        <button>追加</button>
      </form>
      <span>{enteredTodo}</span>
    </div>
  )
}

export default Form
