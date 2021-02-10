'use strict';

describe("Thermostat", function() {
  let thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should return a default temperature of 20", function() {
    expect(thermostat._currentTemperature).toEqual(20)
  });

  it("allows user to increase the temperature", function () {
    thermostat.increaseTemperature()
    expect(thermostat._currentTemperature).toEqual(21)
  })

  it("allows user to decrease the temperature", function() {
    thermostat.decreaseTemperature()
    expect(thermostat._currentTemperature).toEqual(19)
  })

})
