'use strict';

var utils = require('../utils/writer.js');
var Risks = require('../service/RisksService');

module.exports.riskCoverages_Get = function riskCoverages_Get (req, res, next) {
  var riskreferencenumber = req.swagger.params['riskreferencenumber'].value;
  var authorization = req.swagger.params['Authorization'].value;
  Risks.riskCoverages_Get(riskreferencenumber,authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.riskNameInvolvements_Get = function riskNameInvolvements_Get (req, res, next) {
  var riskreferencenumber = req.swagger.params['riskreferencenumber'].value;
  var authorization = req.swagger.params['Authorization'].value;
  Risks.riskNameInvolvements_Get(riskreferencenumber,authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.riskNameInvolvements_Put = function riskNameInvolvements_Put (req, res, next) {
  var riskreferencenumber = req.swagger.params['riskreferencenumber'].value;
  var request = req.swagger.params['request'].value;
  var globalTrackingId = req.swagger.params['globalTrackingId'].value;
  Risks.riskNameInvolvements_Put(riskreferencenumber,request,globalTrackingId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.riskParticipations_Get = function riskParticipations_Get (req, res, next) {
  var riskreferencenumber = req.swagger.params['riskreferencenumber'].value;
  var authorization = req.swagger.params['Authorization'].value;
  Risks.riskParticipations_Get(riskreferencenumber,authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.risk_Get = function risk_Get (req, res, next) {
  var riskreferencenumber = req.swagger.params['riskreferencenumber'].value;
  var authorization = req.swagger.params['Authorization'].value;
  Risks.risk_Get(riskreferencenumber,authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.risksStatus_Put = function risksStatus_Put (req, res, next) {
  var riskreferencenumber = req.swagger.params['riskreferencenumber'].value;
  var request = req.swagger.params['request'].value;
  var globalTrackingId = req.swagger.params['globalTrackingId'].value;
  Risks.risksStatus_Put(riskreferencenumber,request,globalTrackingId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
