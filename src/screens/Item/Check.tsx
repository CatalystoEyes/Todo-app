import {FiCheck} from 'react-icons/fi'

interface Boolean{
    isCompleted: boolean
}

export default function Check({isCompleted}: Boolean){
    return(
        <div className={`border-2 rounded-xl border-green-500 ${isCompleted ? 'bg-green-500' : ''} w-6 h-6 mr-3 flex flex-items-center justify-center hover:border-green-400 duration-200`}>
            {isCompleted && <FiCheck size={24}  className='text-stone-900 font-bold'/>}
        </div>
    )
}