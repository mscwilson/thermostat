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

  it("has a minimum temperature of 10", function() {
    expect(thermostat.MINIMUM_TEMPERATURE).toEqual(10)
  })

  it("cannot go below 10 degrees", function() {
    for (let i = 0; i < 11; i++){
      thermostat.decreaseTemperature();
    }
    expect(thermostat._currentTemperature).toEqual(10)
  })

  // it("alerts if minimum temp is reached", function () {
  //   for (let i = 0; i < 11; i++){
  //     thermostat.decreaseTemperature();
  //   }
  //   spyOn(window, "alert");
  //   expect(window.alert).toHaveBeenCalledWith()
  //   })


  it("cannot go above 25 in default PS mode", function() {
    for (let i = 0; i < 6; i++) {
      thermostat.increaseTemperature();
    }
    expect(thermostat.currentTemperature).toEqual(25)
  })

  it("has power saving mode as the default", function() {
    expect(thermostat.isPowerSaving()).toEqual(true)
  })

  it("can switch power saving mode off", function() {
    thermostat.switchOffPowerSaving()
    expect(thermostat.isPowerSaving()).toEqual(false)
  })

  it("can switch power saving mode back on", function() {
    thermostat.switchOffPowerSaving()
    thermostat.switchOnPowerSaving()
    expect(thermostat.isPowerSaving()).toEqual(true)

  })

})



