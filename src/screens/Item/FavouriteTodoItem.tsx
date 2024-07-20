import ITodo from "../../Components/interfaces";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import cn from "classnames";
import { useState } from "react";

interface TodoItemProps {
  todo: ITodo;
}

function TodoItem({ todo }: TodoItemProps) {
  const [favourite, setFavourite] = useState(false);

  const likeTodo = () => {
    setFavourite(!favourite);
  };


  return (
    <button className="flex items-center justify-between w-full mb-4 text-xl rounded-2xl bg-gray-800 p-4">
      <span
        className={cn({
          "line-through": todo.isCompleted,
          flex: todo,
          "items-center": todo,
        })}
      >

          <div>{todo.title}</div>
      </span>
      <div>
      <button onClick={likeTodo}>
          {!favourite ? <FaRegHeart
            className="text-green-500 hover:text-red-300"
            size={23}
          /> : <FaHeart
          className="text-red-300 hover:text-red-200"
          size={23}
        /> }
        </button>
      </div>
    </button>
  );
}

export default TodoItem;
