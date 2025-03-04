/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AiOutlineLogin, AiOutlineUserAdd } from "react-icons/ai";
import { AuthContext } from "../context/AuthProvider";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout()
      .then(() => {
        console.log("Logged out");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                <img src=""/>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link active" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/about">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/admin/dashboard">
                      Sell
                    </Link>
                  </li>

                  {/* <li className="nav-item">
                    <Link className="nav-link active" to="/login">
                      Logout
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/register">
                      Register
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/login">
                      Login
                    </Link>
                  </li> */}

                  <div>
                    <div>
                      {user?(
                        <button onClick={handleLogout}><FaSignOutAlt></FaSignOutAlt>Logout</button>
                      ):(
                        <>
                        <Link to="/login"><AiOutlineLogin></AiOutlineLogin>Login</Link>
                        <Link to="/register"><AiOutlineUserAdd></AiOutlineUserAdd>Register</Link>
                        </>
                      )}

                    </div>
                  </div>







                </ul>

                {
                  user && <>
                  <FaUserCircle></FaUserCircle>
                  <span>{user.email}</span>
                  </>
                }
                {/* <form className="d-flex" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form> */}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
