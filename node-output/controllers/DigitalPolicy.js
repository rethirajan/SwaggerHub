'use strict';

var utils = require('../utils/writer.js');
var DigitalPolicy = require('../service/DigitalPolicyService');

module.exports.digitalPolicy_Get = function digitalPolicy_Get (req, res, next) {
  var policyReference = req.swagger.params['policyReference'].value;
  var productId = req.swagger.params['ProductId'].value;
  var globalTrackingId = req.swagger.params['GlobalTrackingId'].value;
  var sourceSystem = req.swagger.params['SourceSystem'].value;
  DigitalPolicy.digitalPolicy_Get(policyReference,productId,globalTrackingId,sourceSystem)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.digitalPolicy_Post = function digitalPolicy_Post (req, res, next) {
  var pageNumber = req.swagger.params['pageNumber'].value;
  var pageSize = req.swagger.params['pageSize'].value;
  var request = req.swagger.params['request'].value;
  var productId = req.swagger.params['ProductId'].value;
  var globalTrackingId = req.swagger.params['GlobalTrackingId'].value;
  var sourceSystem = req.swagger.params['SourceSystem'].value;
  DigitalPolicy.digitalPolicy_Post(pageNumber,pageSize,request,productId,globalTrackingId,sourceSystem)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
