$(document).ready( () => {
    let thermostat = new Thermostat();

    $('#increase_temp').click( () => {
        thermostat.increaseTemperature();
        console.log(thermostat.currentTemperature);
  })
})
