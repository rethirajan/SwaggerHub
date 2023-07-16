'use strict';


/**
 * Get a List of all the New/Renewal Quote numbers in Genius incepting within the supplied date range.
 * If you enter inception start date, company code and line of business, then a list of New/Renewal Quote numbers with related info will be retrieved based on the provided search criteria.
 *
 * request ConnectQuotesListRequest The data in json format details the fields for Get Quotes List Request.
 * productId String Provide Product Id (Ex: NI01,DC01,GS01)
 * globalTrackingId String Provide Global Tracking Id
 * sourceSystem String Provide Source System Name (optional)
 * returns ConnectQuotesListResponse
 **/
exports.generic_Post = function(request,productId,globalTrackingId,sourceSystem) {
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

