import { todos } from "./data/todos-data";
import { useState } from "react";
import ITodo from "../Components/interfaces";
import { Link } from "react-router-dom";
import FavouriteTodoItem from "./Item/FavouriteTodoItem";

const Favourite = () => {
    const [todo, setTodo] = useState<ITodo[]>(todos);
    
  return (
    <div className="text-white w-4/5 mx-auto">
        <h2 className="text-center text-3xl mb-3">Favourite todos</h2>
        <ul className="flex justify-center text-xl mb-3 gap-3">
          <li className="hover:underline"><Link to={'/'}>Todos</Link></li>
          <li className="hover:underline"><Link to={'/favourite'}>Favourite</Link></li>
          <li className="hover:underline"><Link to={'/completed'}>Completed</Link></li>

      </ul>
      {todo.map((todo) => (
        <FavouriteTodoItem
          key={todo.id}
          todo={todo}
        />
      ))}
    </div>
  )
}

export default Favourite