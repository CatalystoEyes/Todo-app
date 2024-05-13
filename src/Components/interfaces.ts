interface ITodo {
  title: string;
  isCompleted: boolean;
  id: number;
}

export interface ITodoProps {
  todo: ITodo;
  updateTodo: (id: number, title: string) => void;
}

export interface CreateTodoFieldProps {
  setTodo: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

export default ITodo;
