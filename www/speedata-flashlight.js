var PLUGIN_NAME = 'SpeedataFlashlight';

var SpeedataFlashlight = {
  greet: function (name, successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, PLUGIN_NAME, "greet", [name]);
  }
};

module.exports = SpeedataFlashlight;
