import React from "react";
import logo from "../logo1.png";
import {Link} from "react-scroll";


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo " /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link smooth = {true} to="home"className="nav-link" duration={500} href="#">HOME</Link>
              </li>
              <li className="nav-item">
                <Link smooth = {true} to="about"className="nav-link" duration={500} href="#">ABOUT</Link>
              </li>
              <li className="nav-item">
                <Link smooth = {true} to="projects"className="nav-link" duration={500} href="#">PROJECTS</Link>
              </li>
              <li className="nav-item">
                <Link smooth = {true} to="contacts"className="nav-link" duration={500} href="#">CONTACTS</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar
