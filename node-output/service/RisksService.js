'use strict';


/**
 * Get Coverage Details when searching only by RiskReference.
 *
 * riskreferencenumber String The risk reference number e.g. SE00000847LI17A
 * authorization String Provide Bearer Token
 * returns RiskCoveragesResponse
 **/
exports.riskCoverages_Get = function(riskreferencenumber,authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Risk Details when searching only by RiskReference.
 *
 * riskreferencenumber String The risk reference number e.g. SE00000847LI17A
 * authorization String Provide Bearer Token
 * returns RiskNamesResponse
 **/
exports.riskNameInvolvements_Get = function(riskreferencenumber,authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Add Name Involvement to the risk
 * If you enter risk reference number along with name name and name usage, then name gets added to the risk.
 *
 * riskreferencenumber String The risk reference number e.g. AT00000292LI22A or QAT0001665LI22A
 * request NameInvolvementRequest The data in json format details the fields to add name to the risk.
 * globalTrackingId String Provide Global Tracking Id
 * returns IGenericCommonResponse
 **/
exports.riskNameInvolvements_Put = function(riskreferencenumber,request,globalTrackingId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": true};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Risk Participations Details when searching only by RiskReference.
 *
 * riskreferencenumber String The risk reference number e.g. SE00000847LI17A
 * authorization String Provide Bearer Token
 * returns RiskParticipationsResponse
 **/
exports.riskParticipations_Get = function(riskreferencenumber,authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Risk Details when searching only by RiskReference.
 *
 * riskreferencenumber String The risk reference number e.g. SE00000847LI17A
 * authorization String Provide Bearer Token
 * returns RiskResponse
 **/
exports.risk_Get = function(riskreferencenumber,authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update the Genius Policy Master Status Code on a Local Policy
 * If you enter policy reference number along with policy master status code and policy narrative, then policy status gets updated.
 *
 * riskreferencenumber String The policy reference number e.g. AT00015092PR18A
 * request UpdatePolicyStatusRequest The data in json format details the fields required to update the policy status.
 * globalTrackingId String Provide Global Tracking Id
 * returns UpdatePolicyStatusResponse
 **/
exports.risksStatus_Put = function(riskreferencenumber,request,globalTrackingId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

