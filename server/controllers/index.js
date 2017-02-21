// var exports = module.exports = {}
// var db = require('../server.js').db;

exports.postController = (req, res) => {
  console.log('inside postController');
  res.status(200).json({"inside": "postController"});
};

// exports.createPuppy(req, res, next) {
//   req.body.age = parseInt(req.body.age);
//   db.none('insert into pups(name, breed, age, sex)' +
//       'values(${name}, ${breed}, ${age}, ${sex})',
//     req.body)
//     .then(function () {
//       res.status(200)
//         .json({
//           status: 'success',
//           message: 'Inserted one puppy'
//         });
//     })
//     .catch(function (err) {
//       return next(err);
//     });
// }

exports.getController = (req, res) => {
  console.log('inside getController');
  res.status(200).json({"inside": "getController"});
};
