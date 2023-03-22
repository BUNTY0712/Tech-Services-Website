import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const para = {
  color:'red',
  fontSize: '2rem',
  fontWeight: '3rem',
  paddingTop: '2rem',
  paddingLeft: '2rem'
}

const nav = {
  backgroundColor: 'rgb(8, 8, 46)'
}

const NavBar = () => {

    return (
      <>
            <div className='container-fluid' >
              <div className='row' >
                {/* <div className='col-14 mx-auto'> */}
                <nav className=" navbar navbar-expand-lg navbar-dark " style={nav} >
  <div className="container-fluid">
    <Link className="navbar-brand" to="/" style={para}> <h4>Tech Services </h4> </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/service">Service</Link>
        </li>
        
        <li className="nav-item">
          <Link activeClassName='menu_active' className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link activeClassName='menu_active' className="nav-link" to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
                </div>
              </div>
            {/* </div> */}
      </>
    )
}

export default NavBar
