import React from "react";

export default function HomeScreen(props) {
  const homeScreen = {
    backgroundColor: "#3b5249",
    height: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const btn = {
    outline: "none",
    width: "300px",
    padding: "20px 0",
    marginBottom: "50px",
    backgroundColor: "#382933",
    color: "#a4b494",
    cursor: "pointer",
    border: "1px solid #519872",
    fontSize: "1.3rem",
    fontFamily: "Roboto Mono, monospace",
    borderRadius: "7px",
  };

  const title = {
    fontFamily: "Lacquer, cursive",
    color: "#a4b494",
    fontSize: "10rem",
  };

  const desc = {
    fontFamily: "Lacquer, cursive",
    color: "#a4b494",
    fontSize: "2rem",
    marginTop: "40px",
  };

  const top = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
  };

  const bottom = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  };

  return (
    <div className="screen-container" style={homeScreen}>
      <div className="top" style={top}>
        <div className="title" style={title}>
          10Nights
        </div>
        <div className="desc" style={desc}>
          A web survival game
        </div>
      </div>
      <div className="bottom" style={bottom}>
        <button
          style={btn}
          onClick={() => {
            props.navigate("character");
          }}
        >
          Start Game
        </button>
        <button className="settings" style={btn}>
          Settings
        </button>
      </div>
    </div>
  );
}
