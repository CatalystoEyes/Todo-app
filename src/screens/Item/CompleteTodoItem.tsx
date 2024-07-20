import ITodo from "../../Components/interfaces";
import cn from "classnames";
import Check from "./Check";


interface TodoItemProps {
  todo: ITodo;
  changeTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

function CompleteTodoItem({ todo, changeTodo, removeTodo }: TodoItemProps) {
    const completeTodo = () => {
        changeTodo(todo.id);
        setTimeout(() => removeTodo(todo.id), 500);
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
          <div>{todo.title}</div>
      </span>
    </button>
  );
}

export default CompleteTodoItem;
