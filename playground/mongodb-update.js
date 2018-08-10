const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser: true},
(err,client) =>{
  if (err){
  return  console.log('Unable to connect to MongoDB server');
  }

  const db = client.db('TodoApp');
  db.collection('Todos').findOneAndUpdate({text: 'Eat lunch'},{
    $set: {
      text: 'Have lunch'
    }
  },{returnOriginal: false}).then((result) => {
    console.log(result);
  });
  console.log('Connected to MongoDB server');
});
