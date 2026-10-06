import React from "react";
import logoSite from "./images/siteLogo.png";
import menuImage from "./images/menu.png";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import "./Navbar.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeToken } from "../../Redux/Slices/userSlice";
import { AccountCircleRounded } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

import Switch from "react-switch";
import { ToggleContext } from '../../ToggleContext';
import { useContext } from "react";


const Navbar = () => {
  
  // const history = useHistory();
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const userName = useSelector((state) => state.user.fName);
  const token = useSelector((state) => state.user.token);
  const localToken = localStorage.getItem("token");
  const [anchorEl, setAnchorEl] = React.useState(null);
  // Function to handle hover events
  const handleClose = (event) => {
    event.preventDefault();
    setAnchorEl(null);
    dispatch(removeToken());
    // Iterate through localStorage keys
    Object.keys(localStorage).forEach((key) => {
      // Check if the key is not 'version', then remove it
      if (key !== "version") {
        localStorage.removeItem(key);
      }
    });
    Navigate("/home");
    setTimeout(() => {
      window.location.reload();
    }, 200);
  };

  const { toggle, setToggle } = useContext(ToggleContext);



  useEffect(() => {
    if (token || localToken) {
      console.log("");
    }
  }, [token, localToken]);

  return (
    <>
      {token || localToken ? (
        <section class="navbar">
          <nav className="navbar navbar-expand-lg bg-light fixed-top py-2">
            <div className="container">
              <NavLink className="navbar-brand" to="/">
                <img className="logo-set" src={logoSite} alt="" />
              </NavLink>
              <li class="about nav-item d-lg-none d-md-block active" style={{listStyle:'none'}}>
              <div className="d-flex align-items-center gap-2">
                      {toggle && <p className="mb-0 fw-bold">English</p> }
                          
                          <Switch
                          checkedIcon={false}
                          uncheckedIcon={false}
                          onChange={(value) => setToggle(value)}
                          checked={toggle}
                        />
                        {!toggle && <p className="mb-0 fw-bold">Spanish</p> }
                        </div>
                      </li>
              <button
                style={{ marginRight: "16px" }}
                class="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasMenu"
                aria-controls="offcanvasMenu"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <img
                  src={menuImage}
                  style={{ width: "20px", height: "20px" }}
                />
              </button>
              <div
                class="offcanvas offcanvas-end"
                tabindex="-1"
                id="offcanvasMenu"
                aria-labelledby="offcanvasMenuLabel"
              >
                <div class="offcanvas-header">
                  <h5 class="offcanvas-title" id="offcanvasMenuLabel">
                    <a class="navbar-brand" href="/">
                      <img class="logo-set" src={logoSite} alt="" />
                    </a>
                  </h5>
                  <button
                    type="button"
                    class="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>

                <div class="offcanvas-body justify-content-end">
                  <ul className="navbar-nav">
                    {/* <li className="about nav-item me-1">
                      <NavLink
                       className={toggle ? "font nav-link cool-link" : "nav-link cool-link"} 
                        to="/application"
                        activeClassName="active"
                        style={{ marginTop: 4 }}
                      >
                        Application
                      </NavLink>
                    </li>
                    </li> */}
                    <li class="about nav-item active me-1">
                      <NavLink
                       className={toggle ? "font nav-link cool-link" : "nav-link cool-link"} 
                        to="/home"
                        activeClassName="active"
                        style={{ marginTop: 4 }}
                      >
                      {toggle ? 'Inicio' : 'Home'}
                      </NavLink>
                    </li>
                    <li>
                      <div class="dropdown">
                        <a
                          class="nav-link  dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          style={{
                            textDecoration: "none",
                            color: "#192c57 ",
                            fontWeight: 400,
                          }}
                        >
                          <AccountCircleRounded
                            style={{
                              color: "#192c57",
                              fontSize: 25,
                              fontWeight: 600,
                              marginLeft: 3,
                            }}
                          />
                          {userName}
                        </a>
                        <ul class="dropdown-menu">
                          <li>
                            <a
                              class="dropdown-item"
                              href="#"
                              onClick={handleClose}
                            >
                              {toggle ? 'Cerrar sesión' : "Logout"}
                            </a>
                          </li>
                        </ul>

                       
                      </div>
                    </li>
                    <li class="about nav-item d-none d-lg-block active qewe d-flex align-items-center gap-2 ms-5" style={{listStyle:'none'}}>
                     <div className="d-flex align-items-center gap-2">
                     {toggle && <p className="mb-0 fw-bold">English</p> }
                          
                          <Switch
                          checkedIcon={false}
                          uncheckedIcon={false}
                          onChange={(value) => setToggle(value)}
                          checked={toggle}
                        />
                        {!toggle && <p className="mb-0 fw-bold">Spanish</p> }
                     </div>
                      </li>
                        
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </section>
      ) : (
        <section class="navbar">
          <nav class="navbar navbar-expand-lg bg-light fixed-top py-2">
            <div class="container">
              <a class="navbar-brand" href="/">
                <img class="logo-set" src={logoSite} alt="" />
              </a>
              <li class="about nav-item d-lg-none d-md-block active" style={{listStyle:'none'}}>
              <div className="d-flex align-items-center gap-2">
                      {toggle && <p className="mb-0 fw-bold">English</p> }
                          
                          <Switch
                          checkedIcon={false}
                          uncheckedIcon={false}
                          onChange={(value) => setToggle(value)}
                          checked={toggle}
                        />
                        {!toggle && <p className="mb-0 fw-bold">Spanish</p> }
                        </div>
                      </li>
              <button
                style={{ marginRight: "16px" }}
                class="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasMenu"
                aria-controls="offcanvasMenu"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <img
                  src={menuImage}
                  style={{ width: "20px", height: "20px" }}
                />
              </button>
              <div
                class="offcanvas offcanvas-end"
                tabindex="-1"
                id="offcanvasMenu"
                aria-labelledby="offcanvasMenuLabel"
              >
                <div class="offcanvas-header">
                  <h5 class="offcanvas-title" id="offcanvasMenuLabel">
                    <a class="navbar-brand" href="/">
                      <img class="logo-set" src={logoSite} alt="" />
                    </a>
                  </h5>
                  <button
                    type="button"
                    class="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="offcanvas-body justify-content-end">
                  <ul class="navbar-nav">
                    <li
                      class="about nav-item active me-1"
                      // onClick={handleLogin}
                    >
                      <NavLink
                        className={toggle ? "font nav-link cool-link" : "nav-link cool-link"} 
                        to="/home"
                        activeClassName="active"
                        style={{ marginTop: 4 }}
                      >
                        {toggle ? 'Inicio' : 'Home'}
                      </NavLink>
                    </li>

                    <li
                      class="about nav-item active me-1"
                      // onClick={handleLogin}
                    >
                      <NavLink
                       className={toggle ? "font nav-link cool-link" : "nav-link cool-link"} 
                        to="/login"
                        activeClassName="active"
                        style={{ marginTop: 4 }}
                      >
                        {toggle ? 'iniciar sesión' : "Log in"}
                      </NavLink>
                    </li>
                    <li class="about d-none d-lg-block nav-item active  ms-5" style={{listStyle:'none'}}>
                    <div className="d-flex align-items-center gap-2">
                      {toggle && <p className="mb-0 fw-bold">English</p> }
                          <Switch
                          checkedIcon={false}
                          uncheckedIcon={false}
                          onChange={(value) => setToggle(value)}
                          checked={toggle}
                        />
                        {!toggle && <p className="mb-0 fw-bold">Spanish</p> }
                        </div>
                      </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </section>
      )}
    </>
  );
};

export default Navbar;
