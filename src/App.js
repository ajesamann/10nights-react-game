import React, { Component } from "react";
import HomeScreen from "./views/homeScreen/homeScreen.js";
import CharacterScreen from "./views/characterScreen/characterScreen.js";
import NightScreen from "./views/nightScreen/nightScreen.js";

class App extends Component {
  changeScreen = (screen) => {
    //iterate through all the screens
    for (let i = 0; i < this.state.screens.length; i++) {
      //if the screen name passed through equals the screen name in the array, then set that one to true, and the rest to false
      if (screen === this.state.screens[i].screen) {
        //create a copy of the screens
        let screens = this.state.screens;
        //for each object if the screen name does not equal the one passed through, change it's view to false
        screens.forEach((screen) => {
          if (screen !== screens[i].screen) {
            screen.view = false;
          }
        });
        //set the view that matches the screen passed in to true
        screens[i].view = true;
        //set the state with the newly updated array
        this.setState({
          screens,
        });
      }
    }
    //loop through the screens again after it has been updated and return what the user requested
    for (let i = 0; i < this.state.screens.length; i++) {
      if (
        this.state.screens[i].view &&
        this.state.screens[i].screen === "home"
      ) {
        return <HomeScreen navigate={this.changeScreen} />;
      } else if (
        this.state.screens[i].view &&
        this.state.screens[i].screen === "character"
      ) {
        return (
          <CharacterScreen
            decreaseStat={this.decreaseStat}
            increaseStat={this.increaseStat}
            characterInfo={this.state.character}
            navigate={this.changeScreen}
          />
        );
      } else if (
        this.state.screens[i].view &&
        this.state.screens[i].screen === "night"
      ) {
        return (
          <NightScreen
            statBarPercentages={this.getHealthPercentage}
            loseHealth={this.loseHealth}
            characterInfo={this.state.character}
          />
        );
      }
    }
  };

  //decrease the stat in the character customization menu
  decreaseStat = (stat, amount) => {
    let character = this.state.character;
    let upgradePoints = character.upgradePoints;

    if (upgradePoints === 5) {
      return;
    } else {
      if (stat === "health" && character.stats.health > 10) {
        character.stats.health = character.stats.health + amount;
        character.stats.maxHealth = character.stats.maxHealth + amount;
        character.upgradePoints = character.upgradePoints + amount;
      }

      if (stat === "intellect" && character.stats.intellect > 10) {
        character.stats.intellect = character.stats.intellect - amount;
        character.upgradePoints = character.upgradePoints + amount;
      }

      if (stat === "strength" && character.stats.strength > 10) {
        character.stats.strength = character.stats.strength - amount;
        character.upgradePoints = character.upgradePoints + amount;
      }

      this.setState({ character });
    }
  };
  //increase the stat in the character customization menu
  increaseStat = (stat, amount) => {
    let character = this.state.character;
    let upgradePoints = character.upgradePoints;

    if (upgradePoints === 0) {
      return;
    } else {
      if (stat === "health") {
        character.stats.health = character.stats.health + amount;
        character.stats.maxHealth = character.stats.maxHealth + amount;
        character.upgradePoints = character.upgradePoints - amount;
      }

      if (stat === "intellect") {
        character.stats.intellect = character.stats.intellect + amount;
        character.upgradePoints = character.upgradePoints - amount;
      }

      if (stat === "strength") {
        character.stats.strength = character.stats.strength + amount;
        character.upgradePoints = character.upgradePoints - amount;
      }

      this.setState({ character });
    }
  };

  getHealthPercentage = (stat) => {
    let maxHealth = this.state.character.stats.maxHealth;
    let currentHealth = this.state.character.stats.health;
    let maxHunger = this.state.character.stats.maxHunger;
    let currentHunger = this.state.character.stats.hunger;
    let maxThirst = this.state.character.stats.maxThirst;
    let currentThirst = this.state.character.stats.thirst;

    let currentHealthPercentage = Math.floor((currentHealth / maxHealth) * 100);

    let currentHungerPercentage = Math.floor((currentHunger / maxHunger) * 100);

    let currentThirstPercentage = Math.floor((currentThirst / maxThirst) * 100);

    if (stat === "hunger") {
      return currentHungerPercentage;
    } else if (stat === "thirst") {
      return currentThirstPercentage;
    } else if (stat === "health") {
      return currentHealthPercentage;
    }
  };

  //state has to be under the methods because im passing the methods as props to the components that will be rendered dynamically which are in state
  state = {
    screens: [
      { screen: "home", view: true },
      { screen: "settings", view: false },
      { screen: "character", view: false },
      { screen: "day", view: false },
      { screen: "night", view: false },
      { screen: "inventory", view: false },
    ],
    character: {
      stats: {
        maxHealth: 10,
        health: 10,
        maxThirst: 10,
        thirst: 10,
        maxHunger: 10,
        hunger: 10,
        strength: 10,
        intellect: 10,
      },
      nightsSurvived: 0,
      upgradePoints: 5,
      inventory: [],
      weapon: "",
    },
    enemies: [
      {
        name: "Zombie",
        health: 25,
        attack: 10,
        defence: 3,
        drops: [],
      },
      {
        name: "Bloater",
        health: 15,
        attack: 12,
        defence: 4,
        drops: [],
      },
    ],
    items: [],
  };

  render() {
    return <div className="App">{this.changeScreen()}</div>;
  }
}

export default App;
