import React from "react";
import { Container, Typography, Box, Avatar, Paper } from "@mui/material";
import reactimage from "../assets/stack/React.png";
import angularimage from "../assets/stack/Angular.png";
import javaimage from "../assets/stack/Java.png";
import javascriptimage from "../assets/stack/Javascript.jpeg";
import springbootimage from "../assets/stack/SpringBoot.png";
import seleniumimage from "../assets/stack/Selenium.png";
import dockerimage from "../assets/stack/docker.png";
import djangoimage from "../assets/stack/Django.png";

export default function LeftPane() {
  return (
    <div
      style={{
        backgroundColor: "white",
        maxWidth: 200,
        minWidth: 150,
        paddingTop: 20,
        paddingRight: 40,
      }}
    >
      <img
        src={reactimage}
        alt="React"
        style={{
          width: "75%",
          height: "auto",
          marginTop: "10px",
          paddingTop: 20,
          paddingRight: 40,
        }}
      ></img>
      <img
        src={angularimage}
        alt="React"
        style={{
          width: "75%",
          height: "auto",
          marginTop: "10px",
          paddingTop: 20,
          paddingRight: 40,
        }}
      ></img>
      <img
        src={javaimage}
        alt="Java"
        style={{
          width: "75%",
          height: "auto",
          marginTop: "10px",
          paddingTop: 20,
          paddingRight: 40,
        }}
      ></img>
      <img
        src={javascriptimage}
        alt="Javascript"
        style={{
          width: "75%",
          height: "auto",
          marginTop: "10px",
          paddingTop: 20,
          paddingRight: 40,
        }}
      ></img>
      <img
        src={springbootimage}
        alt="Springboot"
        style={{
          width: "75%",
          height: "auto",
          marginTop: "10px",
          paddingTop: 20,
          paddingRight: 40,
        }}
      ></img>
      <img
        src={seleniumimage}
        alt="Selenium"
        style={{
          width: "75%",
          height: "auto",
          marginTop: "10px",
          paddingTop: 20,
          paddingRight: 40,
        }}
      ></img>
      <img
        src={dockerimage}
        alt="docker"
        style={{
          width: "75%",
          height: "auto",
          marginTop: "10px",
          paddingTop: 20,
          paddingRight: 40,
        }}
      ></img>
      <img
        src={djangoimage}
        alt="django"
        style={{
          width: "75%",
          height: "auto",
          marginTop: "10px",
          paddingTop: 20,
          paddingRight: 40,
        }}
      ></img>
    </div>
  );
}
