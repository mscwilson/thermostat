'use strict';

class Thermostat {
  constructor() {
    this._currentTemperature = 20
  }


  increaseTemperature() {
    this._currentTemperature += 1
  }

  decreaseTemperature() {
    this._currentTemperature -= 1
  }

}



