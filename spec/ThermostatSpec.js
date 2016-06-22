"use strict";

describe('Thermostat', function() {

  it('has a minimum of 10 degrees', function() {
    for (var i = 0; i < 11; i++) {
      thermostat.down();
    }
    expect(thermostat.temperature()).toEqual(10);
  });

  it('has a default maximum of 25 degrees', function() {
    for (var i = 0; i < 6; i++) {
      thermostat.up();
    }
    expect(thermostat.temperature()).toEqual(25);
  });

  it('has a default maximum of 32 degrees if powersave is off', function() {
    thermostat.togglePowerSaving()
    for (var i = 0; i < 13; i++) {
      thermostat.up();
    }
    expect(thermostat.isPowerSaving()).toEqual(false)
    expect(thermostat.temperature()).toEqual(32);
  });


  // it('raises error if temp would go under 10', function() {
  //   expect(function() {thermostat.up(-11)}).toThrow(new Error('minimum temperature is 10'));
  // });
  //
  // it('raises error if temp would go over 25 if powersaving is on', function() {
  //   expect(function() {thermostat.up(+50)}).toThrow(new Error('Max temp is 25 with power saving mode'));
  // });
  //
  // it('doesnt raise error if temp is udner 32 and powersaving is off', function() {
  //   thermostat.up(7);
  //   expect(thermostat.temperature()).toEqual(27);
  // });
  //
  // it('raises error if temp would go over 32 if powersaving is off', function() {
  //   expect(function() {thermostat.up(+50)}).toThrow(new Error('Max temp is 32'));
  // });
  //
  // it('toggles power saving mode', function() {
  //   thermostat.togglePowerSaving();
  //   expect(thermostat.isPowerSaving()).toMatch(/false/);
  // });
});
