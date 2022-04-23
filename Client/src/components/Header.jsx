import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { currentUser, logOut } = useAuth();
  const [error, setError] = useState(false);

  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (err) {
      setError("Error to Log Out");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/home">
        <b> ESCALAB CLIENTS MANAGEMENT BACKOFFICE</b>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/home">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li>{error && <h6>{error}</h6>}</li>
          <li>
            <button
              type="button"
              className="btn btn-outline-warning btn-sm mt-2 ml-3"
              onClick={handleLogOut}
            >
              Log Out
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
