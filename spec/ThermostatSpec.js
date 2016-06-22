"use strict";

describe('Thermostat', function() {
  var thermostat = new Thermostat();
  beforeEach(function(){

  });

  it('raises error if temp would go under 10', function() {
    expect(function() {thermostat.changeTemperature(-11)}).toThrow(new Error('minimum temperature is 10'));
  });

  it('raises error if temp would go over 25 if powersaving is on', function() {
    expect(function() {thermostat.changeTemperature(+50)}).toThrow(new Error('Max temp is 25 with power saving mode'));
  });

  it('toggles power saving mode', function() {
    thermostat.togglePowerSaving();
    expect(thermostat.isPowerSaving()).toMatch(/false/);
  });
});
