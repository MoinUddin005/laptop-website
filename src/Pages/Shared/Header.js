import React from 'react';

import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/UseAuth/UseAuth';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const logo = 'https://i.ibb.co/9ZBBNW9/istockphoto-1130947395-612x612.png';

const Header = () => {
  const {user, logout} = useAuth();
    return (
      
      <nav className="navbar sticky-top  navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
       <Link className="navbar-brand" to="/home"><b><span className="text-opacity-100 bg-opacity-100 text-secondary"><i class="fas fa-laptop-code"></i> Laptop World</span></b></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="ms-auto navbar-nav">
              <Link className="nav-link active" to="/home"><b>Home</b></Link>
              <Link className="nav-link active" to="/allservices"><b>Allservices</b></Link>
              
              
              <Link className="nav-link active" to="/contract"><b>Contract</b></Link>
              

              
              <div className="mx-auto ms-lg-5 navbar-nav">
    
              

              </div>
              <div className="mx-auto ms-lg-3 navbar-nav">
              

              

              {user.email ?  
               <Box>
               <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/dashboard">
                   <Button color="inherit">Dashboard</Button>
               </NavLink>
               <Button onClick={logout} color="inherit">Logout</Button>
           </Box>
              :
              <Link className="nav-link active btn-primary rounded" to="/login"><b>Login</b></ Link>
              
              }

              <span className="ps-2">Signed in as: <b>{user?.displayName}</b></span>
              </div>

          </div>
          
        </div>
      </div>
    </nav>
    );
};

export default Header;