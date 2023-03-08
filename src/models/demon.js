export class Demon {
  constructor(index, lostStamina, waitTurns, recoverStamina, earningTurns) {
    this.index = index - 1;
    this.lostStamina = lostStamina;
    this.waitTurns = waitTurns;
    this.recoverStamina = recoverStamina;
    this.earningTurns = earningTurns;
    this.fragments = [];
  }

  /**
   * Adds a new wonderful fragment
   */
  addFragment(fragment) {
    this.fragments.push(fragment);
  }
}
