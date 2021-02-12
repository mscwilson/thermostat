$(document).ready( () => {
    let thermostat = new Thermostat();

    $("#temperature").text(thermostat.currentTemperature)

    $('#increase_temp').click( () => {
        thermostat.increaseTemperature();
        $("#temperature").text(thermostat.currentTemperature)
    })

    $('#decrease_temp').click( () => {
      thermostat.decreaseTemperature();
      $("#temperature").text(thermostat.currentTemperature)
    })
})
