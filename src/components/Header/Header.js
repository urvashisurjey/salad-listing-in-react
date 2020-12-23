import React from 'react';
import './Header.css'
import 'font-awesome/css/font-awesome.min.css';
import {Link} from 'react-router-dom';
import SaladMenu from '../../components/SaladMenu/SaladMenu'
const Header = () => {
    return (
        <>
<nav className="navbar navbar-expand-md bg-dark navbar-dark fixed-top">
<div className="collapse navbar-collapse" id="navbarCollapse">
    <img  src={require('../../assets/images/salad-logo.png').default} className="image-design" alt='background-img'/>

    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <a href={'/home'} className="nav-link" >Home</a>
      </li>
      <li className="nav-item">
        <a href={'/login'} className="nav-link">Menu</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" >Delivery</a>
      </li>
      <li className="nav-item">
        <a className="nav-link">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" >Reviews</a>
      </li>
      <li className="nav-item">
        <a className="nav-link">Contact</a>
      </li>
      <li className="fa-icons">
        <a className="nav-link" ><i className="fa fa-heart-o"></i></a>
      </li>
      <li className="fa-icons">
        <a className="nav-link" ><i className="fa fa-user"></i></a>
      </li>
      <li className="fa-icons">
        <a className="nav-link"><i className="fa fa-sign-out"></i></a>
      </li>

    </ul>
  </div>
</nav>
</>
    )
}

export default Header
