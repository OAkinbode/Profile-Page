import React, { useState, useEffect } from "react";
import { Container, Typography, Box, Avatar, Paper } from "@mui/material";
import tictactoeimage from "../assets/Tictactoe.jpeg";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/TicTacToe.css";
import "../styles/Nice-button.css";

export default function TicTacToe() {
  const initialBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  const [board, setBoard] = useState(initialBoard);
  const [startGame, setStartGame] = useState(null);
  const [humanPlay, setHumanPlay] = useState({});
  const [compPlay, setCompPlay] = useState({});
  const [compPlayRow, setCompPlayRow] = useState(null);
  const [compPlayCell, setCompPlayCell] = useState(null);
  const [play, setPlay] = useState("");
  const [lastPlay, setLastPlay] = useState("");
  const [playPos, setPlayPos] = useState(0);
  const [winner, setWinner] = useState(0);
  const [winnerName, setWinnerName] = useState("");
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    handleHumanPlay(play);
  }, [play]);

  useEffect(() => {
    setTimeout(function () {
      makeComputerPlay();
    }, 500);
  }, [playPos]);

  useEffect(() => {
    mapCompPlay();
    console.log("I got into the lastPlay useffect", lastPlay);
  }, [lastPlay]);

  useEffect(() => {
    handleComputerPlay(compPlayRow, compPlayCell);
  }, [compPlayRow, compPlayCell]);

  useEffect(() => {
    lastPlaySettings();
  }, [compPlay]);

  useEffect(() => {
    declareWinner();
  }, [winner]);

  useEffect(() => {
    if (winner === 1 || winner === 2) {
      setShowComponent(true);
    } else {
      setShowComponent(false);
    }
  }, [winnerName]);

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
    window.location.reload();
  };

  function checkWinner(playJson) {
    setWinner(playJson.winner);
  }

  function declareWinner() {
    if (winner != 0) {
      if (winner === 1) {
        setWinnerName("Computer");
      } else if (winner === 2) {
        setWinnerName("You");
      }
    }
  }

  function handleComputerPlay(rowIndex, cellIndex) {
    if (compPlayRow !== null || compPlayCell !== null) {
      const newBoard = [...board];
      newBoard[rowIndex][cellIndex] = "O";
      setBoard(newBoard);
    }
  }

  function makeComputerPlay() {
    if (playPos != 0) {
      async function fetchData() {
        try {
          const response = await axios.post(
            "http://localhost:8080/api/computer"
          );
          setCompPlay(response.data);
          // findLastPlay(compPlay);
        } catch (error) {
          console.error(error);
        }
      }

      fetchData();
    }
  }

  function lastPlaySettings() {
    if (playPos === 2) {
      setLastPlay(compPlay.two);
    } else if (playPos === 4) {
      setLastPlay(compPlay.four);
    } else if (playPos === 6) {
      setLastPlay(compPlay.six);
    } else if (playPos === 8) {
      setLastPlay(compPlay.eight);
    } else if (playPos === 10) {
      setLastPlay(compPlay.ten);
    } else if (playPos === 12) {
      setLastPlay(compPlay.twelve);
    }

    checkWinner(compPlay);
    console.log(compPlay);
  }

  function mapCompPlay() {
    // map computer play to APIPlay
    if (lastPlay.slice(-2) === "00") {
      setCompPlayRow(0);
      setCompPlayCell(0);
    } else if (lastPlay.slice(-2) === "01") {
      setCompPlayRow(0);
      setCompPlayCell(1);
    } else if (lastPlay.slice(-2) == "02") {
      setCompPlayRow(0);
      setCompPlayCell(2);
    } else if (lastPlay.slice(-2) === "10") {
      setCompPlayRow(1);
      setCompPlayCell(0);
    } else if (lastPlay.slice(-2) === "11") {
      setCompPlayRow(1);
      setCompPlayCell(1);
    } else if (lastPlay.slice(-2) === "12") {
      setCompPlayRow(1);
      setCompPlayCell(2);
    } else if (lastPlay.slice(-2) === "20") {
      setCompPlayRow(2);
      setCompPlayCell(0);
    } else if (lastPlay.slice(-2) === "21") {
      setCompPlayRow(2);
      setCompPlayCell(1);
    } else if (lastPlay.slice(-2) === "22") {
      setCompPlayRow(2);
      setCompPlayCell(2);
    }
  }

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
  };

  async function handleHumanPlay(play) {
    let url = `http://localhost:8080/api/humanplayer/${play}`;
    if (url != "http://localhost:8080/api/humanplayer/") {
      try {
        const response = await axios.post(url);
        setHumanPlay(response.data);
        setPlayPos(playPos + 2);
        checkWinner(humanPlay);
      } catch (error) {
        console.error(error);
      }
    }
  }

  return (
    <Container maxWidth="md" sx={{ marginTop: "2rem" }}>
      <Typography variant="h3" gutterBottom>
        {/* Sola Akinbode */}
      </Typography>

      <Paper sx={{ padding: "2rem" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "2rem",
            backgroundColor: "#D3D3D3",
          }}
        >
          <Avatar
            src={tictactoeimage}
            sx={{ width: 100, height: 100, marginRight: "1rem" }}
            alt="Picture"
          />
          <Typography
            variant="h3"
            style={{ color: "green", fontStyle: "italic" }}
          >
            Tic-Tac-Toe
          </Typography>
        </Box>
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

        <div>
          <p></p>
          <p></p>
          <button class="nice-button" onClick={restartGame}>
            Restart Game
          </button>
        </div>
        <div>{showComponent && <MyComponent />}</div>
        <Typography
          variant="h6"
          textAlign={"left"}
          gutterBottom
          style={{ color: "black", fontStyle: "italic" }}
        >
          About the game
        </Typography>
        <Typography
          variant="body1"
          textAlign={"left"}
          style={{ color: "black" }}
        >
          Play against the computer! The game is built using a frontend that
          renders the plays and a backend that runs the game logic. The frontend
          makes three calls, one to start the game, one to register your play
          and one to prompt the backend to make a play. The backend is written
          in Java/Springboot. To see the code please click on the link <i> </i>
          <a href="https://github.com/OAkinbode/Profile-Page">here.</a>
        </Typography>
      </Paper>
      <div>
        <p></p>
      </div>
      <Paper sx={{ padding: "2rem" }}>
        <div>
          <Typography
            variant="h6"
            textAlign={"left"}
            gutterBottom
            style={{ color: "black", fontStyle: "italic" }}
          >
            Other Projects...
          </Typography>
          <Typography
            variant="body1"
            textAlign={"left"}
            style={{ color: "black" }}
          >
            Other projects are coming on here soon! Please visit my github
            repository to see some projects in development. Links are below.
          </Typography>
        </div>
      </Paper>
    </Container>
  );

  function MyComponent() {
    return (
      <div>
        <h3>The winner is: {winnerName}!</h3>
      </div>
    );
  }
}
