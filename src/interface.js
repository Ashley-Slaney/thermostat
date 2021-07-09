document.addEventListener('DOMContentLoaded', () => {
  const thermostat = new Thermostat();
  const updateTemperature = () => {
    document.querySelector('#display-temperature').innerText = thermostat.getCurrentTemperature();
    document.querySelector('#display-temperature').className = thermostat.energyUsage();
  }

  updateTemperature();
  
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

