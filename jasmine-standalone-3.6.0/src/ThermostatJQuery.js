$(document).ready( () => {
    let thermostat = new Thermostat();
    updateTemperature();
    $("#powersave").text(thermostat.isPowerSaving);


    $('#increase_temp').click( () => {
        thermostat.increaseTemperature();
        updateTemperature();
      })

    $('#decrease_temp').click( () => {
      thermostat.decreaseTemperature();
      updateTemperature();
    })

    $('#reset').click( () => {
      thermostat.reset();
      updateTemperature();
    })

    $('#power_save').click( () => {
      thermostat.powerSavingSwitch();
      if(thermostat.isPowerSaving() === true){
        $("#powersave").text("on");
      } else {
        $("#powersave").text("off");
      }
      updateTemperature()
    })


    function updateTemperature() {
      $("#temperature").text(thermostat.currentTemperature)
      $("#temperature").attr("class", thermostat.energyUsage());
    }
})
