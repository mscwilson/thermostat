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
    this._currentTemperature += 1
  }

  decreaseTemperature() {
    if(this._currentTemperature === 10) {
      throw new Error("cannot go below 10 degrees");
      }
    this._currentTemperature -= 1
  }
}


