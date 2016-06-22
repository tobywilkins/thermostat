"use strict";

describe('Feature Test:', function() {
  var thermostat = new Thermostat();

  it('starts at 20*', function() {
    expect(thermostat.temperature()).toEqual(20);
  });

  it('can change the temperature', function() {
    thermostat.changeTemperature(2);
    expect(thermostat.temperature()).toEqual(22);
  });
});
