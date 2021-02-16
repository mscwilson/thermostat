$(document).ready( () => {
    let thermostat = new Thermostat();
    updateTemperatureDisplay()
    updatePowerSavingDisplay()


    $('#increase_temp').click( () => {
        thermostat.increaseTemperature();
        updateTemperatureDisplay()
      })

    $('#decrease_temp').click( () => {
      thermostat.decreaseTemperature();
      updateTemperatureDisplay()
    })

    $("#power-save-switch").click( function() {
      thermostat.powerSavingSwitch()
      updatePowerSavingDisplay()
    })


  function updateTemperatureDisplay() {
    $("#current-temperature").text(thermostat.currentTemperature)
  }

  function updatePowerSavingDisplay() {
    let value;
    if (thermostat.isPowerSaving() === true) {
      value = "on"
    } else {
      value = "off"
    }
    $("#power-save-status").text(value)
  }

})

