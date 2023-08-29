import { Link, useLocation } from "react-router-dom";
import "./Nav.css";
import { useAuth } from "../../context/AuthContext";
import { useEffect } from "react";
import { useState } from "react";

export default function Nav(prop) {
  const { pathname } = useLocation();
  const { currentUser, verified } = useAuth();
  const path = pathname.slice(1)
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
                  path == "profile"
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
                path == "about"
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
                path == "vans"
                  ? { textDecoration: "underline" }
                  : { textDecoration: "none" }
              }
            >
              Vans
            </li>
          </Link>
          {currentUser ?
          <Link to="/host">
            <li
              style={
                path == "host"
                  ? { textDecoration: "underline" }
                  : { textDecoration: "none" }
              }
            >
              host
            </li>
          </Link>: null}
        </ul>
      </div>
    </>
  );
}
