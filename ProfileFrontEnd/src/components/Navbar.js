import React from "react";
import { Link } from "react-router-dom";
import { Container, Typography, Box, Avatar, Paper } from "@mui/material";
import "../styles/Navbar.css";
import backgroundimage from "../assets/profileimage.jpeg";

function Navbar() {
  return (
    <div className="navbar">
      <Avatar
        src={backgroundimage}
        sx={{ width: 70, height: 70, marginRight: "1rem" }}
        alt="Picture"
      />
      <div className="links">
        <Link to="/login">Login/Register</Link>
      </div>
    </div>
  );
}

export default Navbar;
