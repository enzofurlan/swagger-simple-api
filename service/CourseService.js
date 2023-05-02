'use strict';


/**
 * Add a new course
 * Adds a new course entry to the system and returns the added course
 *
 * body Courses_body The new course to add
 * returns courses_body
 **/
exports.addCourse = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "courseId" : 1,
  "courseName" : "Computer Science",
  "courseDuration" : 4,
  "courseType" : "Engineering"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Add a student to a course
 * Adds a new student association to the course and returns the added student.
 *
 * body Student The student to add
 * courseId String The unique course id
 * returns Student
 **/
exports.addCourseStudent = function(body,courseId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "studentId" : 101,
  "firstName" : "James",
  "lastName" : "Smith",
  "phoneNumber" : "555-555-1234",
  "address" : "US"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete a specific course
 * Removes a course entry from the system
 *
 * courseId String The unique course id
 * returns Course
 **/
exports.deleteCourse = function(courseId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "courseId" : 1,
  "courseName" : "Computer Science",
  "courseDuration" : 4,
  "courseType" : "Engineering"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get a specific course
 * Returns the course details
 *
 * courseId String The unique course id
 * returns Course
 **/
exports.getCourse = function(courseId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "courseId" : 1,
  "courseName" : "Computer Science",
  "courseDuration" : 4,
  "courseType" : "Engineering"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get students belonging to a course
 * Returns the list of all students enrolled in the course
 *
 * courseId String The unique course id
 * returns List
 **/
exports.getCourseStudents = function(courseId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "studentId" : 101,
  "firstName" : "James",
  "lastName" : "Smith",
  "phoneNumber" : "555-555-1234",
  "address" : "US"
}, {
  "studentId" : 101,
  "firstName" : "James",
  "lastName" : "Smith",
  "phoneNumber" : "555-555-1234",
  "address" : "US"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all the courses
 * Returns the list of all courses
 *
 * sortBy String The sort order
 * returns inline_response_200
 **/
exports.getCourses = function(sortBy) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "courseId" : 1,
  "courseName" : "Computer Science",
  "courseDuration" : "4",
  "courseType" : "Engineering"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an existing course
 * Updates a course entry and returns the updated course
 *
 * body Course The course details to update
 * courseId String The unique course id
 * returns Course
 **/
exports.updateCourse = function(body,courseId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "courseId" : 1,
  "courseName" : "Computer Science",
  "courseDuration" : 4,
  "courseType" : "Engineering"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

