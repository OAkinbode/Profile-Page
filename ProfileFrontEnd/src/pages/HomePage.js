import React from "react";
import { Container, Typography, Box, Avatar, Paper } from "@mui/material";
import profileimage from "../assets/profileimage.jpeg";
import { Link } from "react-router-dom";

export default function AboutMe() {
  return (
    <Container maxWidth="md" sx={{ marginTop: "2rem" }}>
      <Typography variant="h3" gutterBottom>
        {/* Sola Akinbode */}
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "2rem",
        }}
      >
        <Avatar
          src={profileimage}
          sx={{ width: 150, height: 150, marginRight: "1rem" }}
          alt="Picture"
        />
        <Typography variant="h4">Sola Akinbode</Typography>
      </Box>
      <Paper sx={{ padding: "2rem" }}>
        <Typography variant="h5" gutterBottom>
          Personal Information
        </Typography>
        <Typography variant="body1" textAlign={"left"} gutterBottom>
          I'm a full stack developer based in Calgary, Alberta. I have 1 year of
          experience building web applications using React, Angular and Spring
          boot.
        </Typography>

        <Typography variant="body1" textAlign={"left"} gutterBottom="true">
          Tech Stack:
        </Typography>

        <ul>
          <li>
            <Typography variant="body1" textAlign={"left"}>
              <b>FrontEnd:</b> Angular, React, HTML, CSS, TypeScript,
              JavaScript, Selenium.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" textAlign={"left"}>
              <b>Backend:</b> Java, Python, C++, MVC, Restful APIs, Linux, Data
              Structures and Algorithms, Spring/Spring Boot, Django, Git/Version
              Control, Docker, Databases/SQL, Testing/Junit, Postman, Maven,
              Gradle, AWS (in view).{" "}
            </Typography>
          </li>
          <li>
            <Typography variant="body1" textAlign={"left"}>
              <b>Machine Learning: </b>
              Machine Learning, Neural Networks, NLP, PySpark, TensorFlow,
              PyTorch, Pandas and NumPy.
            </Typography>
          </li>
        </ul>

        <Typography variant="body1" textAlign={"left"} gutterBottom>
          Education:
        </Typography>
        <ul>
          <li>
            <Typography variant="body1" textAlign={"left"}>
              <b>Masters of Software Engineering:</b> University of Calgary.{" "}
              <i>2022-2023</i>.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" textAlign={"left"}>
              <b>Bachelors of Mechanical Engineering:</b> University of
              Agriculture Abeokuta. <i>2005-2010</i>.
            </Typography>
          </li>
        </ul>

        <Typography variant="body1" textAlign={"left"} gutterBottom>
          Projects:
        </Typography>
        <ul>
          <li>
            <Typography variant="body1" textAlign={"left"}>
              <b>Java Game:</b>
              <Link to="/projects">
                {" "}
                <i> Play tic-tac-toe against a Java Program</i>.{" "}
              </Link>
            </Typography>
          </li>
        </ul>

        <Typography variant="body1" textAlign={"left"} gutterBottom>
          Links:
        </Typography>
        <ul>
          <li>
            <Typography variant="body1" textAlign={"left"}>
              <a href="https://github.com/OAkinbode">
                <i>Github account</i>
              </a>
            </Typography>
          </li>
          <li>
            <Typography variant="body1" textAlign={"left"}>
              <a href="https://www.linkedin.com/in/olusolaakinbode/">
                <i>LinkedIn page</i>
              </a>
            </Typography>
          </li>
        </ul>
      </Paper>
    </Container>
  );
}
