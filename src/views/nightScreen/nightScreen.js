import React from "react";
import "../../styles/nightScreen.css";
import styled from "styled-components";

export default function NightScreen(props) {
  const HealthBar = styled.div`
    width: 300px;
    height: 25px;
    background-color: rgb(207, 207, 207);
    position: relative;
    &:before {
      content: "";
      position: absolute;
      width: ${() => props.statBarPercentages("health")}%;
      height: 25px;
      background-color: #a02020;
    }
    &:after {
      content: "Health: ${props.characterInfo.stats.health}/${props
        .characterInfo.stats.maxHealth}";
      position: absolute;
      width: 100%;
      text-align: center;
      color: white;
      font-size: 0.9rem;
      line-height: 25px;
      font-family: Roboto Mono, monospace;
    }
  `;

  const ThirstBar = styled.div`
    width: 300px;
    height: 25px;
    background-color: rgb(207, 207, 207);
    position: relative;
    &:before {
      content: "";
      position: absolute;
      width: ${() => props.statBarPercentages("thirst")}%;
      height: 25px;
      background-color: #1b81c5;
    }
    &:after {
      content: "Thirst: ${props.characterInfo.stats.thirst}/${props
        .characterInfo.stats.maxThirst}";
      position: absolute;
      width: 100%;
      text-align: center;
      color: white;
      font-size: 0.9rem;
      line-height: 25px;
      font-family: Roboto Mono, monospace;
    }
  `;

  const HungerBar = styled.div`
    width: 300px;
    height: 25px;
    background-color: rgb(207, 207, 207);
    position: relative;
    &:before {
      content: "";
      position: absolute;
      width: ${() => props.statBarPercentages("hunger")}%;
      height: 25px;
      background-color: #724913;
    }
    &:after {
      content: "Hunger: ${props.characterInfo.stats.hunger}/${props
        .characterInfo.stats.maxHunger}";
      position: absolute;
      width: 100%;
      text-align: center;
      color: white;
      font-size: 0.9rem;
      line-height: 25px;
      font-family: Roboto Mono, monospace;
    }
  `;

  return (
    <div className="container">
      <div className="top-gamescreen">
        <div className="nights">
          Nights Survived:{" "}
          <span className="night">{props.characterInfo.nightsSurvived}</span>
        </div>
        <div className="player-btns">
          <div className="show-stats">SHOW STATS</div>
          <div className="inventory">INVENTORY</div>
        </div>
      </div>
      <div className="event-container">
        <div className="game-event">
          You have entered the forest at midnight. It's pitch black - all you
          have is your dog and your pistol. There's half a mag left as you used
          some of it to defend yourself. The sounds make you miss home.. it's
          dark, and the wind whispers in your ears.. good luck. Make your first
          move.
        </div>
        <div className="next-btn">Proceed</div>
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
