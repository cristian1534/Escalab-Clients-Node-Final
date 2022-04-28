import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Swal from "sweetalert2";
import "../assets/css/Register-Login.css";

const Login = () => {
  const { logIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const history = useHistory();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await logIn(email, password);
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user.email === "admin@escalab.com") {
          new Swal({
            title: "Bienvenido Administrador",
            text: `Backoffice Escalab's Clients`,
            icon: "success",
          });
          history.push("/admin");
        } else {
          history.push("/home");
        }
      });
    } catch (err) {
      console.log(err);
      setError("wrong credentials");
      setTimeout(() => setError(""), 1500);
    }
  };

  return (
    <div>
      <div className="loginBox">
        {" "}
        <img
          className="user"
          src="https://i.ibb.co/yVGxFPR/2.png"
          height="100px"
          width="100px"
          alt="Logo"
        />
        {error && <h2 style={{color:"red"}}>{error}</h2>}
        <h3>Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="inputBox">
            {" "}
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleEmail}
              required
            />{" "}
            <input
              id="pass"
              type="password"
              name="Password"
              placeholder="Password"
              onChange={handlePassword}
              required
            />{" "}
          </div>{" "}
          <input type="submit" name="" value="Login" />
        </form>{" "}
        <Link to="/">
          You do not have an account?
          <br />{" "}
        </Link>
        <div className="text-center">
          <p>Login</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
