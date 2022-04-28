import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../assets/css/Register-Login.css";

const Register = () => {
  const { signUp } = useAuth();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const history = useHistory();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleUsername = (e) => setUsername(e.target.value);

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
     await signUp(email, password)
      history.push("/login")
    }catch(err) {
      console.log(err);
      setError("server error")
      setTimeout(() => setError(""), 1500);
    }

  }


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
        {error && <h3 style={{color:"red"}}>{error}</h3>}
        <h3>Sign Up</h3>
        <form onSubmit={handleSubmit}>
          <div className="inputBox">
            {" "}
            <input
              id="uname"
              type="text"
              name="Username"
              placeholder="Username"
              onChange={handleUsername}
              required
            />{" "}
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
              placeholder="Password (min 6 digits)"
              onChange={handlePassword}
              required
            />{" "}
          </div>{" "}
          <input type="submit" name="" value="Register" />
        </form>{" "}
        <Link to="/login">
          Already account?
          <br />{" "}
        </Link>
        <div className="text-center">
          <p>Sign-Up</p>
        </div>
      </div>
    </div>
  );
};

export default Register;
