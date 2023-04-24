import React, { useState, useEffect } from "react";
import { Container, Typography, Box, Avatar, Paper } from "@mui/material";
import tictactoeimage from "../assets/Tictactoe.jpeg";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/TicTacToe.css";

export default function TicTacToe() {
  const initialBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  const [board, setBoard] = useState(initialBoard);
  const [startGame, setStartGame] = useState(null);
  const [compPlay, setCompPlay] = useState(null);
  const [compPlayRow, setCompPlayRow] = useState(null);
  const [compPlayCell, setCompPlayCell] = useState(null);
  const [play, setPlay] = useState("");
  const [lastPlay, setLastPlay] = useState(null);

  useEffect(() => {
    handleHumanPlay(play);
    // makeComputerPlay();
    console.log("this is the value of play:", play);
  }, [play]);

  useEffect(() => {
    fetch("http://localhost:8080/api/startgame/you", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    })
      .then((response) => response.json())
      .then((startGame) => setStartGame(startGame));
  }, []);

  if (!startGame) {
    return <div>Loading...</div>;
  }

  const restartGame = () => {
    axios
      .post("http://localhost:8080/api/startgame/you")
      .then((response) => setStartGame(response.json()))
      .catch((error) => console.error(error));
  };

  const findLastPlay = (playJson) => {
    if (playJson.six == "") setLastPlay("five");
    else if (playJson.five == "") setLastPlay("four");
    else if (playJson.four == "") setLastPlay("three");
    else if (playJson.three == "") setLastPlay("two");
    else if (playJson.two == "") setLastPlay("one");
    else setLastPlay("777");
  };

  const handleComputerPlay = (rowIndex, cellIndex) => {
    const newBoard = [...board];
    newBoard[rowIndex][cellIndex] = "X";
    setBoard(newBoard);
  };

  const makeComputerPlay = () => {
    axios
      .post("http://localhost:8080/api/computer")
      .then((response) => setCompPlay(response.json()))
      .catch((error) => console.error(error));

    // map computer play to APIPlay
    findLastPlay(compPlay);
    if (lastPlay.slice(-2) == "00") {
      setCompPlayRow(0);
      setCompPlayCell(0);
    } else if (lastPlay.slice(-2) == "01") {
      setCompPlayRow(0);
      setCompPlayCell(1);
    } else if (lastPlay.slice(-2) == "02") {
      setCompPlayRow(0);
      setCompPlayCell(2);
    } else if (lastPlay.slice(-2) == "10") {
      setCompPlayRow(1);
      setCompPlayCell(0);
    } else if (lastPlay.slice(-2) == "11") {
      setCompPlayRow(1);
      setCompPlayCell(1);
    } else if (lastPlay.slice(-2) == "12") {
      setCompPlayRow(1);
      setCompPlayCell(2);
    } else if (lastPlay.slice(-2) == "20") {
      setCompPlayRow(2);
      setCompPlayCell(0);
    } else if (lastPlay.slice(-2) == "21") {
      setCompPlayRow(2);
      setCompPlayCell(1);
    } else if (lastPlay.slice(-2) == "22") {
      setCompPlayRow(2);
      setCompPlayCell(2);
    }
    // make computer play
    handleComputerPlay(compPlayRow, compPlayCell);
  };

  const handleCellClick = (rowIndex, cellIndex) => {
    const newBoard = [...board];
    newBoard[rowIndex][cellIndex] = "X";
    setBoard(newBoard);

    //Map play to API Play
    if (rowIndex === 0 && cellIndex === 0) setPlay("0,0");
    else if (rowIndex === 0 && cellIndex === 1) setPlay("0,1");
    else if (rowIndex === 0 && cellIndex === 2) setPlay("0,2");
    else if (rowIndex === 1 && cellIndex === 0) setPlay("1,0");
    else if (rowIndex === 1 && cellIndex === 1) setPlay("1,1");
    else if (rowIndex === 1 && cellIndex === 2) setPlay("1,2");
    else if (rowIndex === 2 && cellIndex === 0) setPlay("2,0");
    else if (rowIndex === 2 && cellIndex === 1) setPlay("2,1");
    else if (rowIndex === 2 && cellIndex === 2) setPlay("2,2");

    //Send API Play
    // handleHumanPlay(play);
    // makeComputerPlay();

    // console.log("this is the value of play: ", play);
  };

  function handleHumanPlay(play) {
    axios
      .post(`"http://localhost:8080/api/humanplayer/" + ${play}`)
      .then((response) => setStartGame(response.json()))
      .catch((error) => console.error(error));
  }

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
          backgroundColor: "#f0f0f0",
        }}
      >
        <Avatar
          src={tictactoeimage}
          sx={{ width: 150, height: 150, marginRight: "1rem" }}
          alt="Picture"
        />
        <Typography variant="h4" style={{ color: "blue", fontStyle: "italic" }}>
          Tic-Tac-Toe
        </Typography>
      </Box>
      <Paper sx={{ padding: "2rem" }}>
        <div className="board">
          {board.map((row, rowIndex) => (
            <div className="row" key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <button
                  className={`cell ${cell}`}
                  key={cellIndex}
                  onClick={() => handleCellClick(rowIndex, cellIndex)}
                >
                  {board[rowIndex][cellIndex]}
                </button>
              ))}
            </div>
          ))}
        </div>
      </Paper>
    </Container>
  );
}
