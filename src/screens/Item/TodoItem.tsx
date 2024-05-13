import ITodo from "../../Components/interfaces";
import Check from "./Check";
import { MdEdit } from "react-icons/md";
import { BsFillTrash3Fill } from "react-icons/bs";
import cn from "classnames";
import { useState } from "react";
import EditTodoField from "../Create-todo-field/EditTodoField";

interface TodoItemProps {
  todo: ITodo;
  changeTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

function TodoItem({ todo, changeTodo, removeTodo }: TodoItemProps) {
  const [editing, setEditing] = useState(false);

  const editTodo = () => {
    setEditing(true);
  };

  const completeTodo = () => {
    changeTodo(todo.id);
    setTimeout(() => removeTodo(todo.id), 500);
  };

  const updateTodo = () => {
    // const updatedTodos = [...todos];

    // const todoToUpdate = updatedTodos.find((todo) => todo.id === id);

    // if (todoToUpdate) {
    //   todoToUpdate.title = updatedTitle;

    //   setTodos(updatedTodos);
    // }
    // setEditing(false);
    console.log("Task was updated");
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
        <button onClick={completeTodo}>
          <Check isCompleted={todo.isCompleted} />
        </button>
        {editing ? (
          <>
            <EditTodoField todo={todo} updateTodo={updateTodo} />
          </>
        ) : (
          <div>{todo.title}</div>
        )}
      </span>
      <div>
        <button onClick={editTodo}>
          <MdEdit
            className="text-green-500 hover:text-green-400 mx-3"
            size={23}
          />
        </button>
        <button onClick={() => removeTodo(todo.id)}>
          <BsFillTrash3Fill
            size={23}
            className="text-green-500 hover:text-red-500 duration-200"
          />
        </button>
      </div>
    </button>
  );
}

export default TodoItem;
