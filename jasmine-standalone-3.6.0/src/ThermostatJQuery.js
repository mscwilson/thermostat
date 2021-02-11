$(document).ready( () => {
    let thermostat = new Thermostat();

    $('#increase_temp').click( () => {
        thermostat.increaseTemperature();
        console.log(thermostat.currentTemperature);
    })

    $('#decrease_temp').click( () => {
      thermostat.decreaseTemperature();
      console.log(thermostat.currentTemperature)
    })
})
