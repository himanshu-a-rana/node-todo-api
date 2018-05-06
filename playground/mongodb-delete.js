const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    console.log(`Unable to connect to database`);
  }

  console.log('Connected to MongoDB server');

  const db = client.db('TodoApp');

  /** Todos with deleteMany */
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // }, (error) => {
  //   console.log(`Unable to delete data from database, ${error}`);
  // });

  db.collection('Users').deleteMany({name: 'Aayush'}).then((result) => {
    console.log(result);
  }, (error) => {
    console.log(`Unable to delete data from database, ${error}`);
  });

  /** Todos with deleteOne */
  // db.collection('Users').deleteOne({ name: 'Shreya' }).then((result) => {
  //   console.log(result);
  // }, (error) => {
  //   console.log(`Unable to delete data from database, ${error}`);
  // });

  /** Todos with findOneAndDelete */
  // db.collection('Users').findOneAndDelete({ name: 'Aayush' }).then((result) => {
  //   console.log(result);
  // }, (error) => {
  //   console.log(`Unable to delete data from database, ${error}`);
  // });

  client.close();
});