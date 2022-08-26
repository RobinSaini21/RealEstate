import React from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Header() {
  return (
 <>
{/* favorite */}
    <nav>
    <div className="brand">
      <h3>MyBrand</h3>
    </div>
    <div className="navigation">
      <ul className="menu">
       <Link to={"rent"}> <li><a href="#">Rent</a></li></Link>
       <Link to={"favorite"}> <li><a href="#">Favorite</a></li></Link>
        <li><a href="#">Team</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div className="search">
        <div className="search-content">
          <button className="search-button"><i className="fa fa-search"></i></button>
          <input type="text" className="search-input" placeholder="Search here..."/>
        </div>
      </div>
    </div>
  </nav>
  <Outlet/>
 </>
  )
}

export default Header