'use strict';


/**
 * Get a list of policies when searching by Program or Policy.
 * If you enter Program the request will expect master underwriting year and program reference number.  If you enter Policy the request will expect master policy reference number.
 *
 * programsearchmethod String Enter either Program or Policy.
 * masterpolicyreferencenumber String Enter either Policy reference number or Quote reference number.(e.g.US00085409PR18A or QUS0049669PR18A) (optional)
 * masterunderwritingyear Integer The year e.g. 2018 (optional)
 * programreferencenumber String The program e.g. 1199842 (optional)
 * returns FindProgramResponse
 **/
exports.programs_Get = function(programsearchmethod,masterpolicyreferencenumber,masterunderwritingyear,programreferencenumber) {
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
 * Get Master and Local policies information.
 * If you enter master policy reference number, then Master and Local policies information will be retrieved.
 *
 * masterpolicyreferencenumber String The master policy reference number e.g. SE00000847LI17A
 * returns GetProgramResponse
 **/
exports.programs_Get_0 = function(masterpolicyreferencenumber) {
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

