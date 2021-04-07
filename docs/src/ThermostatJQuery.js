$(document).ready(() => {
  const thermostat = new Thermostat();
  const apiKey = API_KEY;

  updateTemperatureDisplay();
  updatePowerSavingDisplay();
  updateLocalTemperatureDisplay();
  updateNamedCity();

  $("#increase_temp").click(() => {
    thermostat.increaseTemperature();
    updateTemperatureDisplay();
  });

  $("#decrease_temp").click(() => {
    thermostat.decreaseTemperature();
    updateTemperatureDisplay();
  });

  $("#power-save-switch").click(function () {
    thermostat.powerSavingSwitch();
    updatePowerSavingDisplay();
    updateTemperatureDisplay();
  });

  $("#reset").click(() => {
    thermostat.reset();
    updateTemperatureDisplay();
  });

  $("#form-select-city").submit((event) => {
    event.preventDefault();
    const city = $("#entered-city").val();
    updateLocalTemperatureDisplay(city);
  });

  function updateLocalTemperatureDisplay(city = "London") {
    const apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
    const apiCity = city;
    const apiKeyDeclaration = `&APPID=${apiKey}`;
    const apiUnits = "&units=metric";
    $.get(
      `${apiUrl}${apiCity}${apiKeyDeclaration}${apiUnits}`,
      function (data) {
        console.log(data.main.temp);
        const result = data.main.temp;
        $("#outside-temperature").text(result);
      }
    );
    updateNamedCity(city);
  }

  function updateNamedCity(city = "London") {
    const cityCapitalised = city.charAt(0).toUpperCase() + city.slice(1);
    $("#chosen-city").text(cityCapitalised);
  }

  function updateTemperatureDisplay() {
    const temperature = $("#current-temperature");
    temperature.text(thermostat.currentTemperature);
    temperature.attr("class", thermostat.energyUsage());
  }

  function updatePowerSavingDisplay() {
    let value;
    if (thermostat.isPowerSaving() === true) {
      value = "on";
    } else {
      value = "off";
    }
    $("#power-save-status").text(value);
  }
});
