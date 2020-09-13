import React from "react";
import Character from "../../assets/imgs/character.jsx";
import "../../styles/characterScreen.css";

export default function CharacterScreen(props) {
  const container = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100vh",
  };

  return (
    <div className="container" style={container}>
      <div className="character-info-box">
        <div className="top-text-container">
          <div className="title top-text">Character Customization</div>
          <div className="upgrade-points top-text">
            Upgrade Points:{" "}
            <span style={{ color: "#519872" }}>
              {props.characterInfo.upgradePoints}
            </span>
          </div>
        </div>
        <div className="character-stats">
          <div className="character-health stat">
            Health:{" "}
            <span
              onClick={() => props.decreaseStat("health", 1)}
              className="minus"
              id="health-option-minus"
            >
              -
            </span>
            {props.characterInfo.stats.health}
            <span
              onClick={() => props.increaseStat("health", 1)}
              className="plus"
              id="health-option-plus"
            >
              +
            </span>
          </div>
          <div className="character-strength stat">
            Strength:{" "}
            <span
              onClick={() => props.decreaseStat("strength", 1)}
              className="minus"
              id="strength-option-minus"
            >
              -
            </span>
            {props.characterInfo.stats.strength}
            <span
              onClick={() => props.increaseStat("strength", 1)}
              className="plus"
              id="strength-option-plus"
            >
              +
            </span>
          </div>
          <div className="character-intellect stat">
            Intellect:{" "}
            <span
              onClick={() => props.decreaseStat("intellect", 1)}
              className="minus"
              id="intellect-option-minus"
            >
              -
            </span>
            {props.characterInfo.stats.intellect}
            <span
              onClick={() => props.increaseStat("intellect", 1)}
              className="plus"
              id="intellect-option-plus"
            >
              +
            </span>
          </div>
        </div>
        <div className="character-svg" style={{ transform: "scale(.5)" }}>
          <Character />
        </div>
        <div className="cc-btns">
          <button
            className="back"
            onClick={() => {
              props.navigate("home");
            }}
          >
            Back to menu
          </button>
          <button
            className="play"
            onClick={
              props.characterInfo.upgradePoints !== 0
                ? null
                : () => props.navigate("night")
            }
          >
            Enter the night
          </button>
        </div>
      </div>
    </div>
  );
}
