import React from 'react'
import {BiEdit} from "react-icons/bi"
import {AiFillDelete} from "react-icons/ai"


const ToDo = ({text, doneToDo, updateMode, deleteToDo}) => {
  return (
    <div className="todo">
        <div className='icons'>
            <BiEdit className='icon' onClick={updateMode} />
        </div>
        <div className={doneToDo ? "text" : "text line_through"}>{text}</div>
        <div className='icons'>
            <AiFillDelete className='icon' onClick={deleteToDo} />
        </div>
    </div>
  )
}

export default ToDo
