class Player {

  constructor(initialStamina, maxStamina, availableTurns) {
    this.stamina = initialStamina;
    this.maxStamina = maxStamina;
    this.availableTurns = availableTurns;
  }

  increaseStamina(staminaToAdd) {
    if (this.stamina === this.maxStamina) {
      return;
    } else if ((this.stamina + staminaToAdd) > this.maxStamina) {
      this.stamina = this.maxStamina;
    } else {
      this.stamina += staminaToAdd;
    }
  }

  decreaseStamina(staminaToRemove) {
    if (this.stamina === 0) {
      return;
    } else if ((this.stamina - staminaToRemove) < 0) {
      this.stamina = 0;
    } else {
      this.stamina -= staminaToRemove;
    }
  }

  passTurn() {
    this.availableTurns -= 1;
    if (this.availableTurns === 0) {
      console.log("Available turns is 0!!!!!!");
    }
  }
}

module.exports = Player;