import { IoMdAdd } from "react-icons/io";
import { useState } from "react";
import { CreateTodoFieldProps } from "../../Components/interfaces";

export default function CreateTodoField({ setTodo }: CreateTodoFieldProps) {
  const [title, setTitle] = useState("");

  const addTodo = (title: string) => {
    if (title.trim() != "") {
      setTodo((prev) => [
        {
          id: Math.random(),
          title,
          isCompleted: false,
        },
        ...prev,
      ]);
      setTitle("");
    }
  };

  return (
    <div className="flex items-center justify-between mb-4 text-xl rounded-2xl p-3 w-full border-2 border-slate-600">
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        onKeyPress={(e) => e.key === "Enter" && addTodo(title)}
        className="bg-transparent w-full outline-none text-gray-400"
        placeholder="Enter your task"
      />
      <button onClick={() => addTodo(title)}>
        <IoMdAdd className="text-slate-400 hover:text-slate-300" />
      </button>
    </div>
  );
}
