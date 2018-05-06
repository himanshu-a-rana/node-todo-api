var express = require('express');
var bodyParser = require('body-parser');

const { mongoose } = require('./db/mongoose');
const { Todo } = require('./models/todo');
const { User } = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  // console.log(req.body);
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc)=> {
    res.send(doc);
  }, (err) => {
    res.status(400).send(err);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((result) => {
    res.send({result})
  }, (err) => {
    res.status(400).send(err);
  });
});

app.listen(3000, () => {
  console.log(`Started on port 3000`);
});

// var newTodo = new Todo({
//   text: '   Study Mongoose',
//   // completed: true,
//   // completedAt: new Date()
// });

// newTodo.save().then((doc) => {
//   console.log(`Saved newTodo, ${doc}`);
// }, (err) => {
//   console.log(`Unable to save newTodo, ${err}`);
// });

// newTodo.save().then((doc) => {
//   console.log(`Saved newTodo, ${doc}`);
// }, (err) => {
//   console.log(`Unable to save newTodo, ${err}`);
// });



// let newUser = new user({
//   email: ' himanshu-arunlal.rana@db.com   '
// });

// newUser.save().then((doc) => {
//   console.log(`Data Saved: ${doc}`);
// }, (err) => {
//   console.log(`Unable to save User data, ${err}`);
// });

module.exports = {app};