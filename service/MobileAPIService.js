'use strict';


/**
 * Login user
 * login user.
 *
 * body V1_login_body login object (optional)
 * returns inline_response_201_1
 **/
exports.apiV1LoginPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "expiresIn" : 2934234,
  "accessToken" : "kkjasdkhdhasldoicawoeiji2j3oijlkas",
  "user" : {
    "userPin" : false,
    "id" : "kajsdf-asdf-asdf23-asd-aasd",
    "fullname" : "ahmad nizar",
    "email" : "ahmad@gmail.com"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create transaction
 * Need `bearer authorization` as header
 *
 * returns List
 **/
exports.apiV1MyTransactionGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "transaction_date" : "2023-01-16T07:46:59.092Z",
  "admin_fee" : "5000",
  "expired_at" : "2023-01-17T07:46:59.093Z",
  "receipent_name" : "adi",
  "type_transaction" : "Lokal",
  "bank" : "CIMB Niaga",
  "total" : "9005000",
  "nominal" : "9000000",
  "virtual_account" : "4806-4156-3950-6506-792",
  "type_currency" : "IDR to IDR",
  "id" : "asdfasdf",
  "isExpired" : "false",
  "receipent_norek" : "720200009304145",
  "status" : "In Progress"
}, {
  "transaction_date" : "2023-01-16T07:46:59.092Z",
  "admin_fee" : "5000",
  "expired_at" : "2023-01-17T07:46:59.093Z",
  "receipent_name" : "adi",
  "type_transaction" : "Lokal",
  "bank" : "CIMB Niaga",
  "total" : "9005000",
  "nominal" : "9000000",
  "virtual_account" : "4806-4156-3950-6506-792",
  "type_currency" : "IDR to IDR",
  "id" : "asdfasdf",
  "isExpired" : "false",
  "receipent_norek" : "720200009304145",
  "status" : "In Progress"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create new password
 * tidak pake header, cukup email valid
 *
 * body V1_new_password_body  (optional)
 * returns inline_response_201_3
 **/
exports.apiV1New_passwordPUT = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : "password updated",
  "status" : "success"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create new Pin
 * butuh header authorization
 *
 * body V1_new_pin_body  (optional)
 * returns inline_response_201_4
 **/
exports.apiV1New_pinPUT = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : "pin updated",
  "status" : "success"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * OTP
 * gunakan untuk melakukan verifikasi dengan OTP
 *
 * body Otp Semantara belum ada proses verifikasi nyata. masih menggunakan harcoded **Code**. gunakan `otp_code:`**102030**
 * returns inline_response_200
 **/
exports.apiV1Otp_verificationPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : "otp verification success!",
  "status" : "success"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create user pin
 * Need `bearer authorization` as header
 *
 * body V1_pin_body  (optional)
 * returns inline_response_201_2
 **/
exports.apiV1PinPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : "pin created",
  "status" : "success"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * GET receipent
 * butuh token
 *
 * bank_code String  (optional)
 * no_rekening String  (optional)
 * returns inline_response_200_1
 **/
exports.apiV1ReceipentGET = function(bank_code,no_rekening) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "ANdika"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Register user
 * register user.
 *
 * body User Created user object (optional)
 * returns inline_response_201
 **/
exports.apiV1RegisterPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : "user created"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create transaction
 * Need `bearer authorization` as header
 *
 * body V1_transactions_body  (optional)
 * returns inline_response_201_5
 **/
exports.apiV1TransactionsPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "transaction_id" : "1c38b63e-c2a4-4490-acc1-322796a6b284"
  },
  "message" : "transaction created",
  "status" : "success"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create transaction
 * Need `bearer authorization` as header
 *
 * transaction_id String ID of pet to return
 * returns inline_response_200_2
 **/
exports.apiV1TransactionsTransaction_idGET = function(transaction_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "transaction_date" : "2023-01-16T07:46:59.092Z",
  "admin_fee" : "5000",
  "expired_at" : "2023-01-17T07:46:59.093Z",
  "receipent_name" : "adi",
  "type_transaction" : "Lokal",
  "bank" : "CIMB Niaga",
  "total" : "9005000",
  "nominal" : "9000000",
  "virtual_account" : "4806-4156-3950-6506-792",
  "type_currency" : "IDR to IDR",
  "id" : "asdfasdf",
  "isExpired" : "false",
  "receipent_norek" : "720200009304145",
  "status" : "In Progress"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

