import React from 'react'
import {Link} from 'react-router-dom';
import './SaladMenu.css'
const SaladMenu = () => {
    return (
        <>
        <div className="menu" > 
<nav className="navbar navbar-expand-md bg-dark navbar-dark fixed-top" >
    <h1>Salads Menu</h1>

    <div className="collapse navbar-collapse" id="navbarCollapse">
    <ul className="navbar-nav mr-auto">
        <li className="nav-item " >
        <Link to='/allsalads' className="nav-link ">All salads</Link>
        </li>
        <li className="nav-item">
        <Link to='/comingsoon' className="nav-link" >Pasta</Link>
        </li>
        <li className="nav-item">
        <Link to='/comingsoon' className="nav-link" >Seafood</Link>
        </li>
        <li className="nav-item">
        <Link to='/comingsoon' className="nav-link" >Vegetables</Link>
        </li>
        <li className="nav-item">
        <Link to='/comingsoon' className="nav-link" >Classic</Link>
        </li>



      </ul>
    </div>
  </nav>
</div>
</>
    )
}

export default SaladMenu
