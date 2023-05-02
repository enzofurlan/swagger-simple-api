'use strict';

var utils = require('../utils/writer.js');
var Course = require('../service/CourseService');

module.exports.addCourse = function addCourse (req, res, next, body) {
  Course.addCourse(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.addCourseStudent = function addCourseStudent (req, res, next, body, courseId) {
  Course.addCourseStudent(body, courseId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteCourse = function deleteCourse (req, res, next, courseId) {
  Course.deleteCourse(courseId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCourse = function getCourse (req, res, next, courseId) {
  Course.getCourse(courseId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCourseStudents = function getCourseStudents (req, res, next, courseId) {
  Course.getCourseStudents(courseId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCourses = function getCourses (req, res, next, sortBy) {
  Course.getCourses(sortBy)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateCourse = function updateCourse (req, res, next, body, courseId) {
  Course.updateCourse(body, courseId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
