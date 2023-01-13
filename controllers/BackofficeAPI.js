'use strict';

var utils = require('../utils/writer.js');
var BackofficeAPI = require('../service/BackofficeAPIService');

module.exports.apiBackofficeUsersGET = function apiBackofficeUsersGET (req, res, next) {
  BackofficeAPI.apiBackofficeUsersGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiBackofficeUsersPOST = function apiBackofficeUsersPOST (req, res, next, body) {
  BackofficeAPI.apiBackofficeUsersPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiBackofficeUsersUser_idDELETE = function apiBackofficeUsersUser_idDELETE (req, res, next, user_id) {
  BackofficeAPI.apiBackofficeUsersUser_idDELETE(user_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiBackofficeUsersUser_idPUT = function apiBackofficeUsersUser_idPUT (req, res, next, body, user_id) {
  BackofficeAPI.apiBackofficeUsersUser_idPUT(body, user_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
