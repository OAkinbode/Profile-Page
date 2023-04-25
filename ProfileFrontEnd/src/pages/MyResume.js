import React from "react";
import "../styles/Resume.css";
import resume from "../assets/Resume_Olusola_Akinbode_April_DV04.pdf";
import Navbar from "../components/Navbar";

function MyResume() {
  return (
    <div>
      <Navbar />
      <embed src={resume} type="application/pdf" width="100%" height="850px" />
    </div>
  );
}

export default MyResume;
