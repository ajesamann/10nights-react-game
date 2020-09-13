import React from "react";
import "../../styles/nightScreen.css";
import styled from "styled-components";

export default function NightScreen(props) {
  const HealthBar = styled.div`
    width: 300px;
    height: 15px;
    background-color: rgb(207, 207, 207);
    position: relative;
    &:before {
      content: "";
      position: absolute;
      width: ${() => props.statBarPercentages("health")}%;
      height: 15px;
      background-color: #a02020;
    }
  `;

  const ThirstBar = styled.div`
    width: 300px;
    height: 15px;
    background-color: rgb(207, 207, 207);
    position: relative;
    &:before {
      content: "";
      position: absolute;
      width: ${() => props.statBarPercentages("thirst")}%;
      height: 15px;
      background-color: #1b81c5;
    }
  `;

  const HungerBar = styled.div`
    width: 300px;
    height: 15px;
    background-color: rgb(207, 207, 207);
    position: relative;
    &:before {
      content: "";
      position: absolute;
      width: ${() => props.statBarPercentages("hunger")}%;
      height: 15px;
      background-color: #724913;
    }
  `;

  return (
    <div className="container">
      <div className="nights">
        Nights Survived:{" "}
        <span className="night">{props.characterInfo.nightsSurvived}</span>
      </div>
      <div className="stats">
        <HealthBar>
          <div className="health-bar"></div>
        </HealthBar>
        <HungerBar>
          <div className="hunger-bar"></div>
        </HungerBar>
        <ThirstBar>
          <div className="thirst-bar"></div>
        </ThirstBar>
      </div>
    </div>
  );
}
