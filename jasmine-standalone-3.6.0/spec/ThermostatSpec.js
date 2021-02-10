'use strict';

describe("Thermostat", function() {
  let thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should return a default temperature of 20", function() {
    expect(thermostat._currentTemperature).toEqual(20)
  });

})