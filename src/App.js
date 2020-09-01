import React, { Component } from "react";
import HomeScreen from "./views/homeScreen/homeScreen.js";
import CharacterScreen from "./views/characterScreen/characterScreen.js";

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
      }
    }
  };

  //decrease the stat in the character customization menu
  decreaseStat = (stat) => {
    let character = this.state.character;
    let upgradePoints = character.upgradePoints;

    if (upgradePoints === 5) {
      return;
    } else {
      if (stat === "health" && character.stats.health > 10) {
        character.stats.health = character.stats.health - 1;
        character.upgradePoints = character.upgradePoints + 1;
      }

      if (stat === "intellect" && character.stats.intellect > 10) {
        character.stats.intellect = character.stats.intellect - 1;
        character.upgradePoints = character.upgradePoints + 1;
      }

      if (stat === "strength" && character.stats.strength > 10) {
        character.stats.strength = character.stats.strength - 1;
        character.upgradePoints = character.upgradePoints + 1;
      }

      this.setState({ character });
    }
  };
  //increase the stat in the character customization menu
  increaseStat = (stat) => {
    let character = this.state.character;
    let upgradePoints = character.upgradePoints;

    if (upgradePoints === 0) {
      return;
    } else {
      if (stat === "health") {
        character.stats.health = character.stats.health + 1;
        character.upgradePoints = character.upgradePoints - 1;
      }

      if (stat === "intellect") {
        character.stats.intellect = character.stats.intellect + 1;
        character.upgradePoints = character.upgradePoints - 1;
      }

      if (stat === "strength") {
        character.stats.strength = character.stats.strength + 1;
        character.upgradePoints = character.upgradePoints - 1;
      }

      this.setState({ character });
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
        health: 10,
        water: 10,
        hunger: 10,
        strength: 10,
        intellect: 10,
      },
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
