import React from 'react'
import { BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill, BsLockFill, BsSignIntersectionFill, BsSignTurnSlightLeftFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'


function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive":""}>
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsCart3 className="icon_header" />&nbsp;&nbsp;&nbsp;&nbsp;<p>SHOP</p>
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>X</span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="">
            <BsGrid1X2Fill className="icon" />Dashboard
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsFillArchiveFill className="icon" />Product
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsFillGrid3X3GapFill className="icon" />Categories
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsPeopleFill className="icon" />Customers
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsListCheck className="icon" />Inventory
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsMenuButtonWideFill className="icon" />Reports
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsFillGearFill className="icon" />Settings
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsLockFill className="icon" />Log Out
          </a>
        </li>
        <li className="sidebar-list-item">
        <Link to="/login">
        <BsSignTurnSlightLeftFill className="icon" />Log In
        </Link>
        </li>
        <li className="sidebar-list-item">
        <Link to="/">
          <BsSignIntersectionFill className="icon" />Sign In
        </Link>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar