'use strict';

var utils = require('../utils/writer.js');
var Student = require('../service/StudentService');

module.exports.addStudent = function addStudent (req, res, next, body) {
  Student.addStudent(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteStudent = function deleteStudent (req, res, next, studentId) {
  Student.deleteStudent(studentId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getStudent = function getStudent (req, res, next, studentId) {
  Student.getStudent(studentId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getStudents = function getStudents (req, res, next) {
  Student.getStudents()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateStudent = function updateStudent (req, res, next, body, studentId) {
  Student.updateStudent(body, studentId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
