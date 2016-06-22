"use strict";

describe('Feature Test:', function() {
  var thermostat = new Thermostat();

  it('starts at 20*', function() {
    expect(thermostat.temperature()).toEqual(20);
  });

  it('can change the temperature', function() {
    thermostat.changeTemperature(10);
    expect(thermostat.temperature()).toEqual(30);
  });
});
