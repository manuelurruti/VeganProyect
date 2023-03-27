import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import "../../scss/Layout/Header/Header.css"
import { BurguerMenu } from '../BurguerMenu/BurguerMenu'




export const Header = () => {
  return (
    <> 
    <div className="Headerx">
      <ul className="Header">
   <BurguerMenu/>
    <Link to={"/"} className="textDecoration"> <div className='liVegan'><li className='LiHeader'>Vegan</li></div> </Link>
    <Link to={"/Menu"} className="textDecoration"> <li className='LiHeader'> Menu</li></Link>

    </ul>



    </div>
    <Outlet />
    </>
  )
}
