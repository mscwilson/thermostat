$(document).ready( () => {
    let thermostat = new Thermostat();
    updateTemperature();
    // $("#powersave").text(thermostat.isPowerSaving);


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

    $('#select-city').submit( () => {
      event.preventDefault();
      let city = $('#city').val();
      updateCity(city);
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

    function updateCity(city) {
      let url = 'http://api.openweathermap.org/data/2.5/weather?q='
      let token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&'
      let units = 'units=metric'
      $.get(url + city + token + units, function(data) {
        $("#outside-temperature").text(Math.round(data.main.temp));
      });
    }

    function updateTemperature() {
      $("#temperature").text(thermostat.currentTemperature)
      $("#temperature").attr("class", thermostat.energyUsage());
    }
})
