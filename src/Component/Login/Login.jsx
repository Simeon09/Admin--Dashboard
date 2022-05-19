import React, { useState } from "react";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaUserLock } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import "./sass/login.css";
import { ToastContainer, toast } from "react-toastify";


const Login = () => {
  const [passwordType, setpasswordType] = useState("password");
  const [passwordinputType, setpasswordInputType] = useState("");
  const handlepassword = (e) => {
    setpasswordInputType(e.target.value);
  };
  const togglePassword = (e) => {
    e.preventDefault();
    if (passwordType === "password") {
      setpasswordType("text");
      return;
    }
    setpasswordType("password");
  };
  const [formValid, setformValid] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handlechange = (e) => {
    setformValid({
      ...formValid,
      [e.target.name]: e.target.value,
    });
  };
  const Handlesubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("userDetails", JSON.stringify({ ...formValid }));
    toast.success("Login Successful");
    setTimeout(() => {
      window.location='/Dashboard'
    }, 2000);
  };

  return (
    <>
      <div className="Login">
      <ToastContainer />
        <form autoComplete="none"  onSubmit={Handlesubmit} >
          <h1>LOGIN</h1>
          <label htmlFor="name">Name</label> <br />
          <div className="input-tag">
            <FaUserAlt className="icon" />
            <input
              type="text"
              name="name"
              id="name"
              onChange={handlechange}
              required
            />
          </div>
          <label htmlFor="email">Email</label> <br />
          <div className="input-tag">
            <FaEnvelopeOpenText className="icon" />
            <input type="email" name="email" id="email" required />
          </div>
          <label htmlFor="password">Password</label>
          <div className="input-tag">
            <FaUserLock className="icon" />
            <input
              type={passwordType}
              onChange={handlepassword}
              value={passwordinputType}
              name="password"
              id="password"
              required
            />{" "}
            <button className="btn" onClick={togglePassword}>
              {passwordType === "password" ? (
                <FaEye className="iconE" />
              ) : (
                <FaEyeSlash className="iconE" />
              )}
            </button>
          </div>
          <button className="btnTwo" type="submit">
            Login
          </button>
          
        </form>
      </div>
    </>
  );
};

export default Login;
