import ITodo from '../Components/Interface'
import CreateTodoField from './Create-todo-field/CreateTodoField';
import TodoItem from './Item/TodoItem'
import { useState } from 'react'

const todos: ITodo[] = [
  {
    title: "Finish essay of History",
    isCompleted: false,
    id: 1
  },
  {
    title: "Read a book",
    isCompleted: false,
    id: 2
  },
  {
    title: "Clean up the room",
    isCompleted: false,
    id: 3
  }
];

function Home() {
  const [todo, setTodo] = useState<ITodo[]>(todos);

  const changeTodo = (id: number) => {
    const copy = [...todo]
    const currentTodo = copy.find(t => t.id === id)
    if (currentTodo) {
      currentTodo.isCompleted = !currentTodo.isCompleted
      setTodo(copy)
    }
  }

  const removeTodo = (id: number) => {
    setTodo([...todo].filter(t => t.id !== id))
  }

  return (
    <div className="text-white w-4/5 mx-auto">
      <h1 className='text-center text-4xl font-bold mb-10 pt-10 text-white'>Todo app</h1>
      {todo.map(todo => <TodoItem 
      key={todo.id} 
      todo={todo} 
      changeTodo={changeTodo} 
      removeTodo={removeTodo}/>)}
      <CreateTodoField setTodo={setTodo}/>
    </div>
  )
}

export default Home