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

  it("can be reset to 20", function() {
    thermostat.reset()
    expect(thermostat.currentTemperature).toEqual(20)
  })

  describe("knows about energy usage", function(){

    it("which is medium by default", function(){
      expect(thermostat.energyUsage()).toEqual("medium")
    })

    it("which is low if temp is less than 18 deg", function(){
      for ( let i = 0; i < 5; i++ ) {
        thermostat.decreaseTemperature()
      }
      expect(thermostat.energyUsage()).toEqual("low")
    })

    xit("high")
  })

  describe("has a minimum temperature", function () {

    it("of 10 degrees", function() {
      expect(thermostat.MINIMUM_TEMPERATURE).toEqual(10)
    })

    it("and cannot go below 10 degrees", function() {
      for (let i = 0; i < 11; i++){
        thermostat.decreaseTemperature();
      }
      expect(thermostat._currentTemperature).toEqual(10)
    })

    it("which is false initially", function() {
      expect(thermostat.isMinimumTemperature()).toBe(false)
    })

    it("which is true if it's at 10 degrees", function() {
      for (let i = 0; i < 11; i++){
        thermostat.decreaseTemperature();
      }
      expect(thermostat.isMinimumTemperature()).toBe(true)
    })
  })



  describe("has power saving mode which", function() {

    it("is default", function() {
      expect(thermostat.isPowerSaving()).toEqual(true)
    })

    it("can be switched off", function() {
      thermostat.switchOffPowerSaving()
      expect(thermostat.isPowerSaving()).toEqual(false)
    })

    it("can be switched back on", function() {
      thermostat.switchOffPowerSaving()
      thermostat.switchOnPowerSaving()
      expect(thermostat.isPowerSaving()).toEqual(true)
    })


  })

  describe("has a maximum temperature", function () {

    it("which is false initially", function(){
      expect(thermostat.isMaximumTemperature()).toBe(false)
    })

    it("which is true after many increase temp calls", function() {
      for ( let i = 0; i < 20; i++ ) {
        thermostat.increaseTemperature();
      }
      expect(thermostat.isMaximumTemperature()).toBe(true)
    })

    it("of 25 in default PS mode", function() {
      for ( let i = 0; i < 6; i++ ) {
      thermostat.increaseTemperature();
      }
    expect(thermostat.currentTemperature).toEqual(25)
    })

    it("of 32 when PS mode is turned off", function() {
      thermostat.switchOffPowerSaving()
      for ( let i = 0; i < 13; i++ ) {
        thermostat.increaseTemperature();
      }
      expect(thermostat.currentTemperature).toEqual(32)
    })

  })



})



