document.addEventListener('DOMContentLoaded', () => {
  const thermostat = new Thermostat();

  const updateTemperature = () => {
    document.querySelector('#display-temperature').innerText = thermostat.getCurrentTemperature();
    document.querySelector('#display-temperature').className = thermostat.energyUsage();
  }

  updateTemperature();

  document.querySelector('#select-city').addEventListener('submit', (event) => {
    event.preventDefault();
    const city = document.querySelector('#current-city').value;

    displayWeather(city);
  });

  const displayWeather = (city) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9bc8a3aeaf422f3dc06ee18c1e17bfcd&units=metric`

    fetch(url)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        document.querySelector('#display-temperature').innerText = data.main.temp;
      })
  }
  
  document.querySelector('#temperature-up').addEventListener('click', () => {
    thermostat.up();
    updateTemperature();
  });

  document.querySelector('#temperature-down').addEventListener('click', () => {
    thermostat.down();
    updateTemperature();
  });

  document.querySelector('#temperature-reset').addEventListener('click', () => {
    thermostat.resetTemperature();
    updateTemperature();
  });

  document.querySelector('#psm-on').addEventListener('click', () => {
    thermostat.switchPowerSavingModeOn();
    document.querySelector('#psm-status').innerText = 'On';
  });

  document.querySelector('#psm-off').addEventListener('click', () => {
    thermostat.switchPowerSavingModeOff();
    document.querySelector('#psm-status').innerText = 'Off';
  });
});

