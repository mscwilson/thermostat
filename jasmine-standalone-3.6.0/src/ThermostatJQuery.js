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

    $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
      $("#outside-temperature").text(Math.round(data.main.temp));
    })



    function updateTemperature() {
      $("#temperature").text(thermostat.currentTemperature)
      $("#temperature").attr("class", thermostat.energyUsage());
    }
})
