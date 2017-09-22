/**
 * Created by sanket on 9/8/17.
 */
const express = require('express');
const router = express.Router();
const mysql = require('mysql');

/*var connection  = mysql.createConnection({
    host: 'localhost',
    // port: 8889,
    // socketPath: '/tmp/mysql.sock', // '/Applications/MAMP/tmp/mysql/mysql.sock',
    user: 'root',
    password: 'password',
    database: 'ta_db'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log('You are now connected...')
});*/

/* const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

// Connect
const connection = (closure) => {
  return MongoClient.connect('mongodb://localhost:27017/mean', (err, db) => {
    if (err) return console.log(err);

    closure(db);
  })
    ;
}
  ;

// Error handling
const sendError = (err, res) => {
  response.status = 501;
  response.message = typeof err == 'object' ? err.message : err;
  res.status(501).json(response);
}
  ;

// Response handling
let response = {
  status: 200,
  data: [],
  message: null
};

// Get users
router.get('/users', (req, res) => {
  connection((db) => {
    db.collection('users')
      .find()
      .toArray()
      .then((users) => {
        response.data = users;
        res.json(response);
      })
      .
      catch((err) => {
        sendError(err, res);
      });
  });
}); */

const courses = ["A", "B", "C"];
const students = [
  {id: 1, name: "John"}, {id: 2, name: "Jane"}, {id: 3, name: "June"}, {id: 4, name: "Jacob"},
  {id: 5, name: "Joey"}, {id: 6, name: "Johnny"}, {id: 7, name: "Jade"}, {id: 8, name: "Jason"},
  {id: 9, name: "Jessica"}, {id: 10, name: "Jamie"}, {id: 11, name: "Jorah"}, {id: 12, name: "Jocelyn"},
  {id: 13, name: "Jacob"}, {id: 14, name: "Jake"}];

const profs = [{id:1, "name": "Alin Dobra"}, {id:2, "name": "Beverly Sanders"}, {id:3, "name": "Alper Ungor"}]  
const profCourses = [{"id":1,
                      "name": "Alin Dobra",
                      "courses":
                          ["COP5615: Distributed Operating Systems",
                           "CEN5035: Software Engineering", 
                           "CIS6930: Database Implementation"]}, 
                     {"id": 2,
                     "name": "Beverly Sanders",
                     "courses":
                          ["COP5556: Programming Language Principles",
                            "CIS6930: Concurrent Programming"]}
                    ];

router.get('/students', (req, res) => {
  res.json(students);
})

var getCourses = function (profName) {
  var prof;
  for (var index in profCourses){
    prof = profCourses[index];
    if (prof.name === profName)
          return prof.courses;
  }

  return [];
};

router.get('/prof-courses', (req, res) => {
  res.json( getCourses(req.query.prof));
})

module.exports = router;
