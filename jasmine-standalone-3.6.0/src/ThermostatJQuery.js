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

    $("#reset").click( () => {
      thermostat.reset()
      updateTemperatureDisplay()
    })

    $.get("http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=" + API_KEY, function(data) {
      console.log(data)
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

