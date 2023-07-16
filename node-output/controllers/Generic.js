'use strict';

var utils = require('../utils/writer.js');
var Generic = require('../service/GenericService');

module.exports.generic_Post = function generic_Post (req, res, next) {
  var request = req.swagger.params['request'].value;
  var productId = req.swagger.params['ProductId'].value;
  var globalTrackingId = req.swagger.params['GlobalTrackingId'].value;
  var sourceSystem = req.swagger.params['SourceSystem'].value;
  Generic.generic_Post(request,productId,globalTrackingId,sourceSystem)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
