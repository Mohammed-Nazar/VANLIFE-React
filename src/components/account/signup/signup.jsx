import { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "./signup.css";

export default function SignUp() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setconfirmPassword] = useState();
  const [error, setError] = useState("");
  const { currentUser, signup } = useAuth();
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
      await signup(email, password);
      navigate("/host");
    } catch {
      setError("Flaied");
    }
  };

  return (
    <>
      <div className="signup">
        <h4 className="signup-header">Signup</h4>
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
          <div className="form-password-signup input">
            <label htmlFor="password">Password</label>
            <input
              required
              type="text"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="confirm-password input">
            <label htmlFor="confirmPassword">Confirm password</label>
            <input
              required
              type="text"
              name="confirmPassword"
              id="confirmPassword"
              onChange={(e) => setconfirmPassword(e.target.value)}
            />
          </div>
          <button className="signup-btn btn">Sign Up</button>
        </form>
        <p>
          Alredy have an account?{" "}
          <Link to="/login" style={{ textDecoration: "underline" }}>
            login
          </Link>
        </p>
      </div>
    </>
  );
}
