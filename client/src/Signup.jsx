import React from "react";
import Logo from "./assets/pexels-pixabay-147413.jpg";
import "./styles/Register.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/register", { name, email, password })
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="register-main">
     
      <div className="register-right">
        <div className="register-right-container">
          <div className="register-logo">
            <img src={Logo} alt="" />
          </div>
          <div className="register-center">
            <h2>Welcome to our website!</h2>
            <p>Please enter your details</p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                name="name"
                required={true}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                required={true}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="pass-input-div">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  required={true}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit">Register</button>
            </form>
          </div>

          <p className="login-bottom-p">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
