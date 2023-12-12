import ITodo from '../../Components/Interface';
import Check from './Check';
import {BsFillTrash3Fill} from 'react-icons/bs'
import cn from 'classnames'

interface TodoItemProps {
    todo: ITodo
    changeTodo: (id: number) => void
    removeTodo: (id: number) => void
}

function TodoItem( {todo, changeTodo, removeTodo}: TodoItemProps){
    return(
        <button className='flex items-center justify-between w-full mb-4 text-xl rounded-2xl bg-gray-800 p-4'>
            <span className={cn({
                'line-through': todo.isCompleted,
                'flex': todo,
                'items-center': todo
                
            })} onClick={() => changeTodo(todo.id)}>
                <Check isCompleted={todo.isCompleted}/>
                {todo.title}
            </span>
            <button onClick={() => removeTodo(todo.id)}><BsFillTrash3Fill size={23} className='text-green-500 hover:text-red-500 duration-200'/></button>
        </button>
    )
}

export default TodoItem