'use strict';


/**
 * Get Policy Details when searching only by PolicyReference.
 * When you enter the policy reference, all the details related to the entered policy reference will be displayed.
 *
 * policyReference String The policy reference number e.g. SE00000847LI17A
 * productId String Provide Product Id (Ex: NI01,DC01,GS01)
 * globalTrackingId String Provide Global Tracking Id
 * sourceSystem String Provide Source System Name (optional)
 * returns PolicyServiceResponseExt
 **/
exports.digitalPolicy_Get = function(policyReference,productId,globalTrackingId,sourceSystem) {
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
 * Get Policy Details when searching based on the Filter criteria
 * If you enter policy search details like Policy Reference, inception date expiry date,etc all the details related to the entered search criteria will be displayed.
 *
 * pageNumber String 
 * pageSize String 
 * request PolicyServiceFilterRequest The data in json format details the fields to create a new policy event.
 * productId String Provide Product Id (Ex: NI01,DC01,GS01)
 * globalTrackingId String Provide Global Tracking Id
 * sourceSystem String Provide Source System Name (optional)
 * returns PolicyServiceFilterResponse
 **/
exports.digitalPolicy_Post = function(pageNumber,pageSize,request,productId,globalTrackingId,sourceSystem) {
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

