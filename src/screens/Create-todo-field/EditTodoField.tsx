import { useState } from "react";
import { ITodoProps } from "../../Components/interfaces";

const EditTodoField = ({ todo, updateTodo }: ITodoProps) => {
  const [editing, setEditing] = useState(true);
  const [title, setTitle] = useState(todo.title);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setEditing((prevEditing) => !prevEditing);
      updateTodo(todo.id, title);
    }
  };

  const handleBlur = () => {
    setEditing((prevEditing) => !prevEditing);
    updateTodo(todo.id, title);
  };

  return (
    <>
      {editing ? (
        <input
          className="bg-inherit border-2 rounded-lg border-slate-500 px-1 py-1"
          type="text"
          value={title}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          onBlur={handleBlur}
        />
      ) : (
        <div>{title}</div>
      )}
    </>
  );
};

export default EditTodoField;
