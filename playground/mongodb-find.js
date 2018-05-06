const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log(`Unable to connect to MongoDB server`);
  }

  console.log(`Connected to MongoDB server`);
  let db = client.db('TodoApp');

  /** Find all document */
  // db.collection('Todos').find().toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log(`Unable to fetch Todos, ${err}`)
  // });

  /** Find document based on completed property value as false */
  // db.collection('Todos').find({ completed: false }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log(`Unable to fetch Todos, ${err}`)
  // });

  /** Find document based on ObjectID */
  // db.collection('Todos').find({ _id: new ObjectID('5aee8aa689fd984080cb947e') })
  //   .toArray().then((docs) => {
  //     console.log('Todos');
  //     console.log(JSON.stringify(docs, undefined, 2));
  //   }, (err) => {
  //     console.log(`Unable to fetch Todos, ${err}`)
  //   });

  /** Find document based on count instead of toArray */
  // db.collection('Todos').find()
  //   .count().then((count) => {
  //     console.log('Todos');
  //     console.log(`Todos count: ${count}`);
  //   }, (err) => {
  //     console.log(`Unable to fetch Todos, ${err}`)
  //   });

  /** Find document from User collection based on name field */
  db.collection('Users').find({name: 'Aayushi'})
  .toArray().then((docs) => {
    console.log('Users');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log(`Unable to retrieve data, ${err}`);
  });

  client.close();
});