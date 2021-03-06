const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log(`Unable to connect to database`);
  }

  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');
  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5aee8aa689fd984080cb947e')}, 
    {$set: 
      {completed: true}
    }, {
      returnOriginal: false
    }).then((result) => {
      console.log(result);
    }, (error) => {
      console.log(`Unable to update document, ${error}`);
    });

    client.close();
});