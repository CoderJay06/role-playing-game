function render() {
  document.getElementById("hero").innerHTML = getHeroHtml();
  document.getElementById("monster").innerHTML = getMonsterHtml();
}

function getHeroHtml() {
  return `<div class="character-card">
          <h4 class="name"> Wizard </h4>
          <img class="avatar" src="images/wizard.png"/>
          <p class="health">health: <b> 60 </b></p>
          <div class="dice-container"><div class="dice"> 6 </div></div>
      </div>`;
}

function getMonsterHtml() {
  return `<div class="character-card">
          <h4 class="name"> Orc </h4>
          <img class="avatar" src="images/orc.png"/>
          <p class="health">health: <b> 10 </b></p>
          <div class="dice-container"><div class="dice"> 4 </div></div>
      </div>`;
}

render();
