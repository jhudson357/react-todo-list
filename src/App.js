import logo from './logo.svg'
import './App.css'
import { useState } from 'react'
import PageTitle from './components/PageTitle/PageTitle'
import Form from './components/Form/Form'
import TodoList from './components/TodoList/TodoList'

function App() {
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])

  return (
    <>
      <PageTitle />
      <Form 
        input = {input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
      />
      <TodoList 
        todos={todos}
        setTodos={setTodos}
      />
    </>
  )
}

export default App
