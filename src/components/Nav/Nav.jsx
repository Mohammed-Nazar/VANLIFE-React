import { Link } from "react-router-dom";
import "./Nav.css";
import { useAuth } from "../../context/AuthContext";
import { useEffect } from "react";
import { useState } from "react";

export default function Nav(prop) {
  const { currentUser } = useAuth();
  return (
    <>
      <div className="nav">
        <Link to="/">
          <h1>#VANLIFE</h1>
        </Link>
        <ul>
          {currentUser ? (
            <Link to="/profile">
              <li
                style={
                  prop.AcAb
                    ? { textDecoration: "underline" }
                    : { textDecoration: "none" }
                }
              >
                account
              </li>
            </Link>
          ) : null}{" "}
          <Link to="/about">
            <li
              style={
                prop.AcAb
                  ? { textDecoration: "underline" }
                  : { textDecoration: "none" }
              }
            >
              About
            </li>
          </Link>
          <Link to="/vans">
            <li
              style={
                prop.AcVa
                  ? { textDecoration: "underline" }
                  : { textDecoration: "none" }
              }
            >
              Vans
            </li>
          </Link>
          {!currentUser ?
          <Link to="/host">
            <li
              style={
                prop.AcVa
                  ? { textDecoration: "underline" }
                  : { textDecoration: "none" }
              }
            >
              login
            </li>
          </Link>: null}
        </ul>
      </div>
    </>
  );
}
