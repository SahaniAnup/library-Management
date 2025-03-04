import React from 'react'
import { Link } from 'react-router-dom'
import {HiArrowSmRight, HiUpload, HiUser, HiViewBoards} from 'react-icons/hi'


export const Sidebar = () => {
  return (
   <div className="sidebar">
    <h4 className='text-primary'>Dashboard</h4>
    <hr />
    <div className="list-group">
      <Link to="upload" className='list-group-item list-group-item-action'><HiUpload/> Upload Book</Link>
      <Link to="manage" className='list-group-item list-group-item-action'><HiViewBoards/> Manage Books</Link>
    </div>
    <hr />
    <div className="text-primary">Users</div>
    <hr />
    <div className="list-group">
      <Link to="upload" className='list-group-item list-group-item-action'><HiUser/> Sign In</Link>
      <Link to="manage" className='list-group-item list-group-item-action'><HiArrowSmRight/> Logout</Link>
    </div>
    <hr />


   </div>
  )
}
