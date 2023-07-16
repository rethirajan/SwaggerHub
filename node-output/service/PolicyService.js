'use strict';


/**
 * Get a list of RI Attachments when searching by Policy.
 * When you enter the Policy the request will expect policy reference and will bring back the RI attachments for the policy reference.  The other fields are not in use for this version.
 *
 * policyreferencenumber String The policy reference number e.g. US00085409PR18A
 * returns GetRIResponse
 **/
exports.policyRI_Get = function(policyreferencenumber) {
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
 * Add RI Attachments details to a Local Policy
 * If you enter policy reference number along with RI attachment details, then RI details gets added to the policy.
 *
 * policyreferencenumber String The policy reference number e.g. US00085409PR18A
 * request RIProcessingRequest The data in json format details the fields to create a new RI details.
 * globalTrackingId String Provide Global Tracking Id
 * returns IGenericCommonResponse
 **/
exports.policyRI_Put = function(policyreferencenumber,request,globalTrackingId) {
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
 * Update Policy terms field of a PolicyReference.
 * If you provide policy reference number along with payment condition value,then it will be updated to the policy terms fields.
 *
 * policyreferencenumber String The policy reference number e.g. US00085409PR18A
 * request PolicyTermsRequest The data in json format details for updating policy terms fields.
 * globalTrackingId String Provide Global Tracking Id
 * returns IGenericCommonResponse
 **/
exports.policyTerms_Put = function(policyreferencenumber,request,globalTrackingId) {
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
 * Get Policy transactions when searching by PolicyReference and type.
 *
 * policyreferencenumber String The policy reference number e.g. DE00028392LI20A
 * type String Payment amount type
 * authorization String Provide Bearer Token
 * returns PolicyTransactionsResponse
 **/
exports.policyTransactions_Get = function(policyreferencenumber,type,authorization) {
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
 * Get the summary Premium Collection Status of each Local Policy within a Program.
 * If you enter the Master Policy Reference, then Premium Collection Status of each Local Policy will be returned.  If you enter the Local Policy Reference, then Premium Collection Status of that Local Policy will be returned.
 *
 * policyreferencenumber String The policy reference number e.g. US00085409PR18A
 * returns GetProgramPremiumStatusResponse
 **/
exports.policy_GetPremiumStatus = function(policyreferencenumber) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "$type" : "Gis.Core.Api.Model.NI.GetProgramPremiumStatusResponse, Gis.Core.Api",
  "PolicyPremiumStatuses" : [ {
    "LocalPolicyReference" : "US00085409PR18A",
    "PremiumStatus" : "Full"
  } ],
  "MasterUnderwritingYear" : 0,
  "MasterPolicyReference" : "US00085409PR18A",
  "RequestUser" : "UserID",
  "GeniusTransactionId" : "0",
  "Messages" : [ ],
  "StatusMessages" : [ ],
  "ProcessStatus" : "Success"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Add Policy Event entries to a Local Policy
 * If you enter policy reference number along with policy event code, event narrative and event effective date, then event gets added to the policy.
 *
 * policyreferencenumber String The policy reference number e.g. AT00015102PR18A
 * request AddPolicyEventRequest The data in json format details the fields to create a new policy event.
 * globalTrackingId String Provide Global Tracking Id
 * returns AddPolicyEventResponse
 **/
exports.policy_Post = function(policyreferencenumber,request,globalTrackingId) {
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

