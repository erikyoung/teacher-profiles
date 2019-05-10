/* Core */
import React from 'react';
import logo from '../images/logo.png'; 
import { Link } from 'react-router-dom'; 




export default function Navbar() {
    return (
     <nav className="navbar navbar-expand-lg navbar-light">
     	<Link to='/' classNamve="navbar-brand">
     		<img src={logo} alt="logo" />
     	</Link>
     	<div className="collapse navbar-collapse show ml-sm-5">
     		<ul className="navbar-nav">
     			<li className="navbar-item">
	     			<Link className="nav-link" to='/howtouse'>
	     				How To Use
	     			</Link>
     			</li>
     		</ul>
     	</div>
     </nav>
    );
  
}
