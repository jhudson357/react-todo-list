const TodoList = ({todos, setTodos}) => {
  
  const handleDelete = ({id}) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if(item.id === todo.id) {
          return {...item, completed: ! item.completed}
        }
        return item
      })
    )
  }

  
  return (
    <div>
      {todos.map((todo) => (
        <li className="list-item" key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className="list"
            onChange={(event) => event.preventDeault()}
          />
          <div>
            <button className="button-complete task-button" onClick={() => handleComplete(todo)}>
              <i className="">Complete</i>
            </button>
            <button className="button-edit task-button">
              <i className="">Edit</i>
            </button>
            <button className="button-delete task-button" onClick={() => handleDelete(todo)}>
              <i className="">Delete</i>
            </button>
          </div>
        </li>
      ))}
    </div>
  )
}

export default TodoList