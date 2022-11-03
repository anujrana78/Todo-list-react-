import React from 'react'
import { FcTodoList } from 'react-icons/fc';
import './header.css'

const Header = () => {
  return (
    <div>
        <header>
            <h2>To-Do-List</h2>
            <FcTodoList className='todo-icon'/>
        </header>
    </div>
  )
}

export default Header
