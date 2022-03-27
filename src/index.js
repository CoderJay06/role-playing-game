/*
  import data file for characters data
  create a class for making each charcater
*/
import data from "../src/character_data.json";

class Character {
  constructor(data) {
    Object.assign(this, data);
    this.diceHtml = this.getDiceHtml(this.diceCount);
  }
  // add function that returns a random number 1 - 6
  _getRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
  }

  // add a getDice function for creating array of dice
  // (diceCount in length) parameter: diceCOunt
  getDiceHtml(diceCount) {
    return new Array(diceCount)
      .fill(0)
      .map(() => `<div class="dice">${this._getRandomNumber()}</div>`)
      .join("");
  }
}

function getCharacterHtml(character) {
  const { name, avatarImg, health, diceHtml } = character;
  return `
    <div class="character-card">
          <h4 class="name">${name}</h4>
          <img class="avatar" src=${avatarImg}/>
          <p class="health">health: <b>${health}</b></p>
          <div class="dice-container">${diceHtml}</div>
      </div>
    `;
}

function render() {
  let hero = new Character(data.wizard);
  let monster = new Character(data.orc);
  document.getElementById("hero").innerHTML = getCharacterHtml(hero);
  document.getElementById("monster").innerHTML = getCharacterHtml(monster);
}

render();
