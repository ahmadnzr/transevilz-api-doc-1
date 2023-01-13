'use strict';

var utils = require('../utils/writer.js');
var MobileAPI = require('../service/MobileAPIService');

module.exports.apiV1LoginPOST = function apiV1LoginPOST (req, res, next, body) {
  MobileAPI.apiV1LoginPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1New_passwordPOST = function apiV1New_passwordPOST (req, res, next, body) {
  MobileAPI.apiV1New_passwordPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1Otp_verificationPOST = function apiV1Otp_verificationPOST (req, res, next, body) {
  MobileAPI.apiV1Otp_verificationPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1PinPOST = function apiV1PinPOST (req, res, next, body) {
  MobileAPI.apiV1PinPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1RegisterPOST = function apiV1RegisterPOST (req, res, next, body) {
  MobileAPI.apiV1RegisterPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
