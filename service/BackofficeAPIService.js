'use strict';


/**
 *
 * returns List
 **/
exports.apiBackofficeUsersGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "firstname" : "andi",
  "password" : "myPassWD",
  "address" : "jln. magelang no.5",
  "birth_date" : "10/02/2022",
  "sex" : "male",
  "doc_number" : 123456781727364750,
  "birth_place" : "surakarta",
  "phone_number" : "343434343434",
  "doc_type" : "ktp",
  "email" : "andika@mail.com",
  "lastname" : "ka"
}, {
  "firstname" : "andi",
  "password" : "myPassWD",
  "address" : "jln. magelang no.5",
  "birth_date" : "10/02/2022",
  "sex" : "male",
  "doc_number" : 123456781727364750,
  "birth_place" : "surakarta",
  "phone_number" : "343434343434",
  "doc_type" : "ktp",
  "email" : "andika@mail.com",
  "lastname" : "ka"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * body User  (optional)
 * returns inline_response_201
 **/
exports.apiBackofficeUsersPOST = function(body) {
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
 *
 * user_id String ID of pet to return
 * returns inline_response_200_3
 **/
exports.apiBackofficeUsersUser_idDELETE = function(user_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : "user deleted",
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
 *
 * body User  (optional)
 * user_id String ID of pet to return
 * returns inline_response_201_6
 **/
exports.apiBackofficeUsersUser_idPUT = function(body,user_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : "user updated"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

