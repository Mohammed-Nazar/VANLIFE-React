import { Link, useLocation,NavLink } from "react-router-dom";
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
            <NavLink style={({isActive})=>isActive ? { textDecoration: "underline", textUnderlineOffset: "5px" }
            : { textDecoration: "none" }} to="/profile">
              <li>
                account
              </li>
            </NavLink>
          ) : null}{" "}
          <NavLink style={({isActive})=>isActive ? { textDecoration: "underline", textUnderlineOffset: "5px" }
            : { textDecoration: "none" }} to="/about">
            <li>
              About
            </li>
          </NavLink>
          <NavLink style={({isActive})=>isActive ? { textDecoration: "underline", textUnderlineOffset: "5px" }
            : { textDecoration: "none" }} to="/vans">
            <li>
              Vans
            </li>
          </NavLink>
          {currentUser ?
          <NavLink style={({isActive})=>isActive ? { textDecoration: "underline", textUnderlineOffset: "5px" }
          : { textDecoration: "none" }} to="/host">
            <li>
              host
            </li>
          </NavLink>: null}
          {!currentUser ?
          <NavLink style={({isActive})=>isActive ? { textDecoration: "underline", textUnderlineOffset: "5px" }
          : { textDecoration: "none" }} to="/login">
            <li>
              login
            </li>
          </NavLink>: null}
        </ul>
      </div>
    </>
  );
}
