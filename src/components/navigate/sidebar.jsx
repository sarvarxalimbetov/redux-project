import React from 'react'
import { NavLink } from 'react-router-dom'
import "./sidebar.css"

export default function Sidebar() {
  return (
    <ul className='sidebar_list'>
      <li className='sidebar_item'>
        <NavLink className={({isActive}) => isActive ? 'sidebar_link sidebar_sctive' : "sidebar_link"} to='/'>Home</NavLink>
      </li>
      <li className='sidebar_item'>
        <NavLink className={({isActive}) => isActive ? 'sidebar_link sidebar_sctive' : "sidebar_link"} to='/profiles'>Profiles</NavLink>
      </li>
    </ul>
  )
}
