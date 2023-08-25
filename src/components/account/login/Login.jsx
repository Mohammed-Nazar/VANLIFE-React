import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

export const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState("");
  const { currentUser, login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate("/host");
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      await login(email, password);
      navigate("/host");
    } catch {
      setError("Flaied");
    }
  };

  return (
    <>
      <div className="signup">
        <h4 className="signup-header">Login</h4>
        {error}
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
