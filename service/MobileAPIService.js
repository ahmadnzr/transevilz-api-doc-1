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
 * Create new password
 * Need `bearer authorization` as header
 *
 * body V1_new_password_body  (optional)
 * returns inline_response_201_3
 **/
exports.apiV1New_passwordPOST = function(body) {
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

