$(document).ready( () => {
    let thermostat = new Thermostat();
    updateTemperatureDisplay()
    updatePowerSavingDisplay()
    updateLocalTemperatureDisplay()
    updateNamedCity()


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

    $("#form-select-city").submit( (event) => {
      event.preventDefault()
      let city = $("#entered-city").val()
      updateLocalTemperatureDisplay(city)
    })


  function updateLocalTemperatureDisplay(city = "London") {
    apiUrl = "http://api.openweathermap.org/data/2.5/weather?q="
    apiCity = city
    apiKey = `&APPID=${API_KEY}`
    apiUnits = "&units=metric"
    $.get(`${apiUrl}${apiCity}${apiKey}${apiUnits}`, function(data) {
      console.log(data["main"]["temp"])
      let result = data["main"]["temp"]
      $("#outside-temperature").text(result)
    })
    updateNamedCity(city)
  }

  function updateNamedCity(city = "London") {
    let cityCapitalised = city.charAt(0).toUpperCase() + city.slice(1)
    $("#chosen-city").text(cityCapitalised)
  }

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

