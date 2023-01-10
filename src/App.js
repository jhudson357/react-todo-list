import './App.css'
import { useState, useEffect } from 'react'
import PageTitle from './components/PageTitle/PageTitle'
import Form from './components/Form/Form'
import TodoList from './components/TodoList/TodoList'

function App() {
  // const initialState = JSON.parse(localStorage.getItem('todos')) || []
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])
  const [editTodo, setEditTodo] = useState(null)

  // useEffect(() => {
  //   localStorage.setItem('todos', JSON.stringify(todos))
  // }, [todos])

  return (
    <>
      <PageTitle />
      <Form 
        input = {input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
        />
      <TodoList 
        todos={todos}
        setTodos={setTodos}
        setEditTodo={setEditTodo}
      />
    </>
  )
}

export default App
