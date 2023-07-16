'use strict';

var utils = require('../utils/writer.js');
var Policy = require('../service/PolicyService');

module.exports.policyRI_Get = function policyRI_Get (req, res, next) {
  var policyreferencenumber = req.swagger.params['policyreferencenumber'].value;
  Policy.policyRI_Get(policyreferencenumber)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.policyRI_Put = function policyRI_Put (req, res, next) {
  var policyreferencenumber = req.swagger.params['policyreferencenumber'].value;
  var request = req.swagger.params['request'].value;
  var globalTrackingId = req.swagger.params['globalTrackingId'].value;
  Policy.policyRI_Put(policyreferencenumber,request,globalTrackingId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.policyTerms_Put = function policyTerms_Put (req, res, next) {
  var policyreferencenumber = req.swagger.params['policyreferencenumber'].value;
  var request = req.swagger.params['request'].value;
  var globalTrackingId = req.swagger.params['globalTrackingId'].value;
  Policy.policyTerms_Put(policyreferencenumber,request,globalTrackingId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.policyTransactions_Get = function policyTransactions_Get (req, res, next) {
  var policyreferencenumber = req.swagger.params['policyreferencenumber'].value;
  var type = req.swagger.params['type'].value;
  var authorization = req.swagger.params['Authorization'].value;
  Policy.policyTransactions_Get(policyreferencenumber,type,authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.policy_GetPremiumStatus = function policy_GetPremiumStatus (req, res, next) {
  var policyreferencenumber = req.swagger.params['policyreferencenumber'].value;
  Policy.policy_GetPremiumStatus(policyreferencenumber)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.policy_Post = function policy_Post (req, res, next) {
  var policyreferencenumber = req.swagger.params['policyreferencenumber'].value;
  var request = req.swagger.params['request'].value;
  var globalTrackingId = req.swagger.params['globalTrackingId'].value;
  Policy.policy_Post(policyreferencenumber,request,globalTrackingId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
