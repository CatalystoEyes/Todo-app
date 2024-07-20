import ITodo from "../Components/interfaces";
import CreateTodoField from "./Create-todo-field/CreateTodoField";
import TodoItem from "./Item/TodoItem";
import { useState } from "react";
import { todos } from "./data/todos-data";
import { Link } from "react-router-dom";

function Home() {
  const [todo, setTodo] = useState<ITodo[]>(todos);

  const changeTodo = (id: number) => {
    const copy = [...todo];
    const currentTodo = copy.find((t) => t.id === id);
    if (currentTodo) {
      currentTodo.isCompleted = !currentTodo.isCompleted;
      setTodo(copy);
    }
  };

  const removeTodo = (id: number) => {
    setTodo([...todo].filter((t) => t.id !== id));
  };

  return (
    <div className="text-white w-4/5 mx-auto">
      <h2 className="text-center text-3xl mb-3">Todos</h2>
      <ul className="flex justify-center text-xl mb-3 gap-3">
          <li className="hover:underline"><Link to={'/'}>Todos</Link></li>
          <li className="hover:underline"><Link to={'/favourite'}>Favourite</Link></li>
          <li className="hover:underline"><Link to={'/completed'}>Completed</Link></li>
      </ul>
      {todo.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          changeTodo={changeTodo}
          removeTodo={removeTodo}
        />
      ))}
      <CreateTodoField setTodo={setTodo} />
    </div>
  );
}

export default Home;
