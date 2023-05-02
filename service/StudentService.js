'use strict';


/**
 * Add a new student
 * Adds a new student entry to the system and returns the added student
 *
 * body Student The new student to add
 * returns Student
 **/
exports.addStudent = function(body) {
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
 * Delete a student entry
 * Removes a student entry from the system
 *
 * studentId String The unique student id
 * no response value expected for this operation
 **/
exports.deleteStudent = function(studentId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get a specific student
 * Returns the student details
 *
 * studentId String The unique student id
 * returns Student
 **/
exports.getStudent = function(studentId) {
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
 * Get all the students
 * Returns the list of all students present in the system
 *
 * returns List
 **/
exports.getStudents = function() {
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
 * Update an existing student
 * Updates a student entry in the system and returns the updated student
 *
 * body Student The student details to update
 * studentId String The unique student id
 * returns Student
 **/
exports.updateStudent = function(body,studentId) {
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

