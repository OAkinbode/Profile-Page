import React, { useState } from "react";
import { Container, Typography, Box, Avatar, Paper } from "@mui/material";
import profileimage from "../assets/profileimage.jpeg";
import { Link } from "react-router-dom";

export default function ProjectsRightPage() {
  const [clickedHome, setClickedHome] = useState(false);
  const [clickedProjects, setClickedProjects] = useState(false);
  const [clickedContact, setClickedContact] = useState(false);

  function handleClickHome() {
    setClickedHome(true);
  }

  function handleClickProjects() {
    setClickedProjects(true);
  }

  function handleClickContact() {
    setClickedContact(true);
  }

  return (
    <div
      style={{
        backgroundColor: "#B5E0B2",
        maxWidth: 300,
        minWidth: 200,
        paddingTop: 20,
      }}
    >
      <div>
        <h3>Menu</h3>
      </div>

      <Container>
        <ul>
          <li>
            <Typography
              variant="body1"
              textAlign={"left"}
              onClick={handleClickHome}
              style={{ color: clickedHome ? "blue" : "inherit" }}
            >
              <Link to="/">Home</Link>
            </Typography>
          </li>
          <li>
            <Typography
              variant="body1"
              textAlign={"left"}
              onClick={handleClickProjects}
              style={{ color: clickedProjects ? "blue" : "inherit" }}
            >
              <Link to="/projects"> My Projects </Link>
            </Typography>
          </li>
          <li>
            <Typography
              variant="body1"
              textAlign={"left"}
              onClick={handleClickContact}
              style={{ color: clickedContact ? "blue" : "inherit" }}
            >
              <Link to="/contactus"> Contact Me </Link>
            </Typography>
          </li>
        </ul>
      </Container>
    </div>
  );
}
