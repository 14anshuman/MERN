import React from 'react'
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { userContext } from '../context/globalContext';

const Navbar = () => {
    const {userName,logout} = useContext(userContext);

    const handleLogout = () => {
        logout();
        alert("You have been logged out successfully.");
    }
  return (
    
              <nav className="navbar bg-success navbar-expand-md navbar-light ">
        <button className="navbar-toggler" data-toggle="collapse" data-target="#myDiv">
            <span className="navbar-toggler-icon"></span>

        </button>

        <Link to="https://news.google.com/home?hl=en-IN&gl=IN&ceid=IN:en" className="navbar-brand"><img src="/images/generatedHeaderImage-1662578814159.jpg" width="80px"/></Link>
        <div className="collapse navbar-collapse" id="myDiv"> 
        <ul className="navbar-nav">
            <li className="nav-item "><Link className="nav-link" to="/dash">Dashboard</Link></li>
            <li className="nav-item "><Link className="nav-link" to="/dash/home">Home</Link></li>
            <li className="nav-item "><Link className="nav-link" to="/dash/about">About Us</Link></li>
            <li className="nav-item "><Link className="nav-link" to="/dash/addUser">Add User</Link></li>
            <li className="nav-item "><Link className="nav-link" to="/dash/viewUsers">View Users </Link></li>
             <li className="nav-item "><Link className="nav-link" to="/dash/app">Demo App </Link></li>
             <li className='nav-item'>Edit User</li>
            {/* <li className="nav-item "><Link className="nav-link" to="/Linkdmin/showUsers">Show Users</Link></li> */}


            <li className="nav-item dropdown"><Link className="nav-link dropdown-toggle" to="#" data-toggle="dropdown">Hooks Demo</Link>
                 
                 <div className="dropdown-menu " id="mySub">
                    <Link className="dropdown-item" to="/dash/hook1">Hooks Demo 1</Link>
                    <Link className="dropdown-item" to="/dash/hook2">Hooks Demo 2</Link>
                    <Link className="dropdown-item" to="#">Sublink 3</Link>
                    <Link className="dropdown-item" to="#">Sublink 4</Link>
                    <Link className="dropdown-item" to="#">Sublink 5</Link>
                </div> 

            
             </li>
            
            
            
            
         </ul>

         <span className='navbar-text ml-auto'>
            Welcome <b>{userName}</b>| <button onClick={handleLogout} className='btn btn-sm btn-info'> Logout</button>
         </span>
        </div>



       </nav>
    
  )
}

export default Navbar