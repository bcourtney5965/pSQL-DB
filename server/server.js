var express = require('express');
var path = require('path');
var app = express();
var router = require('./routes');
var Sequelize = require('Sequelize');
// var pgp = require('pg-promise')();
// const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/puppies';
// var db = pgp(connectionString);
                          // 'database', 'username', 'password'
var sequelize = new Sequelize('puppies', 'postgres', 'password', {
  host: 'localhost',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

});


// DB
var User = sequelize.define('user', {
  userName: {
    type: Sequelize.STRING,
    // field: 'first_name' // Will result in an attribute that is firstName when user facing but first_name in the database
  },
  userEmail: {
    type: Sequelize.STRING
  },
  userId: {
    type: Sequelize.INTEGER
  },
  lectureId: {
    type: Sequelize.INTEGER
  },
  lectureCompletionDate: {
    type: Sequelize.DATE
  },
  signInCount: {
    type: Sequelize.INTEGER
  },
  lastSignIn: {
    type: Sequelize.DATE
  }
}, {
  freezeTableName: true // Model tableName will be the same as the model name
});


User.sync({force: true}).then(function () {
  // Table created
  return User.create({
    userName: 'John Hancock',
    userEmail: 'jHancock@gmail.com',
    userId: 23456,
    lectureId: 12341234,
    lectureCompletionDate: Date.now(),
    signInCount: 7,
    lastSignIn: Date.now()
  });
});

// User.sync({force: true});


// User model
var db = {
  get: function(cb) {
    User.findAll()
      // .then(users => cb(null, users))
      .then(function(users) {
        console.log(`users = ${users}`);
        return cb(users);
      })
      .catch(cb);
  },
  post: function(newProgress, cb) {
    db.User.create(newProgress)
      .then(function() {
        return cb(users);
      })
      .catch(cb);
  },
  
}

// Mount middleware &
// Expose routes
require("./middleware")(app);

// user Controller
app.get('/testRoute', function(req, res) {
  console.log("inside /testroute");
  db.get(function(data) {
    res.send('data');
  })
});
app.post('/testRoute', function(req, res) {
  db.post(function(data) {
    res.status(201);
    res.send(data);
  })
});

app.use('/api', router);

exports.app = app;
// exports.db = db;
