const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '5b6f6bca9d42c80356185903';

console.log(ObjectID.isValid('5b6f6bca9d42c8035618590311'));

Todo.find({_id: id}).then((todos) => {
  console.log('Todo: ', todos);
});

Todo.findOne({_id: id}).then((todo) => {
  console.log('Todo: ', todo);
});

Todo.findById(id).then((todo) => {
  console.log('Todo: ', todo);
});
