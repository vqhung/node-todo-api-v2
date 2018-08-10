const {MongoClient, objectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true },
 (err, client) =>{
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  db.collection('Todos').findOneAndDelete({completed: true}).then((results)=>{
    console.log(results);
  },(err) => {
    console.log('Unable to delete todo', err);
  })
});
