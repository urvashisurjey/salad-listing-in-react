import React from 'react'
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
        <a href={'/login'} className="nav-link ">All salads</a>
        </li>
        <li className="nav-item">
        <a href={'/'} className="nav-link" >Pasta</a>
        </li>
        <li className="nav-item">
        <a href={'/home'} className="nav-link" >Seafood</a>
        </li>
        <li className="nav-item">
        <a href={'/home'} className="nav-link" >Vegetables</a>
        </li>
        <li className="nav-item">
        <a href={'/home'} className="nav-link" >Classic</a>
        </li>



      </ul>
    </div>
  </nav>
</div>
</>
    )
}

export default SaladMenu
