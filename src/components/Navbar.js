import React from "react";
import logo from "../ajit_logo.png";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo " /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">ABOUT ME</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">CONTACTS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">PROJECTS</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar
