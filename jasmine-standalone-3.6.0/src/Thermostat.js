'use strict';

class Thermostat {
  constructor() {
    this._currentTemperature = 20
    this.minimumTemperature = 10
  }

  get currentTemperature() {
    return this._currentTemperature
  }

  increaseTemperature() {
    if (this._currentTemperature < 25) {
      this._currentTemperature += 1
    }
  }

  decreaseTemperature() {
    if (this._currentTemperature > 10) {
    this._currentTemperature -= 1
    }
    // else {
    // alert("Minimum temperature reached")
    // }
  }
}


