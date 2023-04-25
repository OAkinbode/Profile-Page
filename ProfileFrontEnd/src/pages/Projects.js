import { Link } from "react-router-dom";
import * as React from "react";
import TicTacToe from "./Project1";
import Navbar from "../components/Navbar";
import RightPane from "./RightPane";

function Projects() {
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex" }}>
        <RightPane />
        <TicTacToe />
      </div>
    </div>
  );
}

export default Projects;
