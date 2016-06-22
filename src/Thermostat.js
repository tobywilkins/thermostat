"use strict";

function Thermostat () {
  this._temperature = 20;
};
  Thermostat.prototype = {
    temperature: function() {
      return this._temperature;
    },

    changeTemperature: function(change) {
      this._temperature = this._temperature + change;
    }
  };
