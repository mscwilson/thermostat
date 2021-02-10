'use strict';

class Thermostat {
  constructor() {
    this.DEFAULT_TEMPERATURE = 20
    this.MINIMUM_TEMPERATURE = 10
    this.MAXIMUM_TEMPERATURE_PS = 25

    this._currentTemperature = this.DEFAULT_TEMPERATURE
  }

  get currentTemperature() {
    return this._currentTemperature
  }

  increaseTemperature() {
    if (this._currentTemperature < this.MAXIMUM_TEMPERATURE_PS) {
      this._currentTemperature += 1
    }
  }

  decreaseTemperature() {
    if (this._currentTemperature > this.MINIMUM_TEMPERATURE) {
    this._currentTemperature -= 1
    }
    // else {
    // alert("Minimum temperature reached")
    // }
  }
}


