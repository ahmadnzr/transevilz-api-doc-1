'use strict';

var utils = require('../utils/writer.js');
var MobileAPI = require('../service/MobileAPIService');

module.exports.apiV1BankGET = function apiV1BankGET (req, res, next) {
  MobileAPI.apiV1BankGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1LoginPOST = function apiV1LoginPOST (req, res, next, body) {
  MobileAPI.apiV1LoginPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1MyTransactionGET = function apiV1MyTransactionGET (req, res, next) {
  MobileAPI.apiV1MyTransactionGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1New_passwordPUT = function apiV1New_passwordPUT (req, res, next, body) {
  MobileAPI.apiV1New_passwordPUT(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1New_pinPUT = function apiV1New_pinPUT (req, res, next, body) {
  MobileAPI.apiV1New_pinPUT(body)
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

module.exports.apiV1ReceipentGET = function apiV1ReceipentGET (req, res, next, bank_code, no_rekening) {
  MobileAPI.apiV1ReceipentGET(bank_code, no_rekening)
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

module.exports.apiV1TransactionsPOST = function apiV1TransactionsPOST (req, res, next, body) {
  MobileAPI.apiV1TransactionsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1TransactionsTransaction_idGET = function apiV1TransactionsTransaction_idGET (req, res, next, transaction_id) {
  MobileAPI.apiV1TransactionsTransaction_idGET(transaction_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
