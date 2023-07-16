'use strict';

var utils = require('../utils/writer.js');
var Programs = require('../service/ProgramsService');

module.exports.programs_Get = function programs_Get (req, res, next) {
  var programsearchmethod = req.swagger.params['programsearchmethod'].value;
  var masterpolicyreferencenumber = req.swagger.params['masterpolicyreferencenumber'].value;
  var masterunderwritingyear = req.swagger.params['masterunderwritingyear'].value;
  var programreferencenumber = req.swagger.params['programreferencenumber'].value;
  Programs.programs_Get(programsearchmethod,masterpolicyreferencenumber,masterunderwritingyear,programreferencenumber)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.programs_Get_1 = function programs_Get_1 (req, res, next) {
  var masterpolicyreferencenumber = req.swagger.params['masterpolicyreferencenumber'].value;
  Programs.programs_Get_1(masterpolicyreferencenumber)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
