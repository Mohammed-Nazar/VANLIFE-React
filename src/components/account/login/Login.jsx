import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

export const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState("");
  const { currentUser, login, verified } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (currentUser && !verified) {
      navigate("/emailVerify");
    }
    if (currentUser && verified) {
      navigate("/host");
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      setError("");
    } catch {
      setError("failed");
    }
  };

  return (
    <>
      <div className="signup">
        <h4 className="signup-header">Login</h4>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-email input">
            <label htmlFor="email">Email</label>
            <input
              required
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-password input">
            <label htmlFor="password">Password</label>
            <input
              required
              type="text"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="login-btn btn">Login</button>
        </form>
        <p style={{color: "red"}}>{error}</p>
        <p>
          Not registered?{" "}
          <Link to="/signup" style={{ textDecoration: "underline" }}>
            Signup
          </Link>
        </p>
      </div>
    </>
  );
};

export default Login;
