// write rfc   ----it will add a boiler plate of react:function based component
// write rcc   ----it will add a boiler plate of react:className based component

import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

export default function NavBar(props) {
  return (
    <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">{props.title}</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">

          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>

            {/* <li className="nav-item">
              <Link className="nav-link" to="/about">{props.aboutText}</Link>
            </li> */}
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-primary" type="submit">Search</button>
          </form> */}


           {/* <button type="button" className="btn btn-danger  rounded-circle mx-1">Red</button> 
           <button type="button" className="btn btn-secondary  rounded-circle mx-1">Gray</button> 
           <button type="button" className="btn btn-success  rounded-circle mx-1 " onClick={props.toggleModeGreen}>Green</button>  */}
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
          <input type="checkbox" onClick={ props.toggleMode} className="form-check-input" id="flexSwitchCheckDefault"/>
          <label className="form-Check-label" htmlFor="flexSwitchCheckDefault">{props.mode==='dark'?"Set LightMode":"Set DarkMode"}</label>
        </div>
        </div>
      </div>
    </nav>
  );
}

// types of props
// types 1
NavBar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
};

// //type 2 default props
// NavBar.defaultProps = {
//   title: "Set title here",
//   aboutText: "About text here",
// };

// // type 3 isRequired Props
// NavBar.propTypes={
//     title:PropTypes.string.isRequired,
//     aboutText:PropTypes.string.isRequired
// }
