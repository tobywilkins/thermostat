"use strict";

function Thermostat () {
  this._temperature = 20;
  this._powerSaving = true;
  this.MINIMUM_TEMPERATURE = 10;
  this.MAXIMUM_TEMPERATURE_NO_POWERSAVE = 32;
  this.MAXIMUM_TEMPERATURE_POWERSAVE = 25;

};

Thermostat.prototype = {

  isMinimumTemperature: function() {
    return this._temperature === this.MINIMUM_TEMPERATURE;
  },

  isMaximumTemperature: function() {
    return this._temperature === this.powerSaveMax()
  },

  powerSaveMax: function () {
    return (this._powerSaving ? this.MAXIMUM_TEMPERATURE_POWERSAVE : this.MAXIMUM_TEMPERATURE_NO_POWERSAVE);
  },

  temperature: function () {
    return this._temperature;
  },

  down: function() {
    if (this.isMinimumTemperature()) {
      return;
    }
      this._temperature -= 1;
  },

  up: function() {
    if (this.isMaximumTemperature()) {
      return;
    }
    this._temperature += 1;
  },

  togglePowerSaving: function() {
    this._powerSaving = !this._powerSaving
  },

  isPowerSaving: function() {
    return this._powerSaving;
  }
};


  //     if((this._temperature + change) < 10) {
  //       throw(new Error('minimum temperature is 10'));
  //   } else if(((this._temperature + change) > 25) && (this._powerSaving === true)) {
  //       throw(new Error('Max temp is 25 with power saving mode'));
  //   } else if((this._temperature + change) > 32) {
  //       throw(new Error('Max temp is 32'));
  //   } else {
  //       this._temperature = this._temperature + change;
  //     }
