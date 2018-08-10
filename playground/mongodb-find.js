const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true },
                  (error, client) => {
                    if (error) {
                      return console.log('Unable to connect to MongoDB server');
                    }

                    console.log('Connected to MongoDB server');

                    db = client.db('TodoApp');

                    db.collection('Todos').find({
                      _id: new ObjectID('5b6cd97412c46806bf12b328')
                    }).count().then((count)=>{
                      console.log(`Todos count: ${count}`);
                    //  console.log(JSON.stringify(docs,undefined,2));
                    },(err) => {
                      console.log('Unable to fetch todos', err);
                    });
                  //  client.close();
                  });
