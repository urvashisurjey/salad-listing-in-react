import React from 'react';
import './Header.css'
import 'font-awesome/css/font-awesome.min.css';
import {Link,Router} from 'react-router-dom';
import SaladMenu from '../../components/SaladMenu/SaladMenu'
const Header = () => {
    return (
        <>
        
<nav className="navbar navbar-expand-md bg-dark navbar-dark fixed-top">
<div className="collapse navbar-collapse" id="navbarCollapse">
    <img  src={require('../../assets/images/salad-logo.png').default} className="image-design" alt='background-img'/>

    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
      <Link to='/saladmenu' className="nav-link" >Home</Link>
      </li>
      <li className="nav-item">
        <Link to='/comingsoon' className="nav-link">Menu</Link>
      </li>
      <li className="nav-item">
        <Link to='/comingsoon' className="nav-link" >Delivery</Link>
      </li>
      <li className="nav-item">
        <Link to='/comingsoon' className="nav-link">About</Link>
      </li>
      <li className="nav-item">
        <Link to='/comingsoon' className="nav-link" >Reviews</Link>
      </li>
      <li className="nav-item">
        <Link to='/comingsoon' className="nav-link">Contact</Link>
      </li>
      <li className="fa-icons">
        <a className="nav-link" ><i className="fa fa-cart-plus"></i></a>
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
