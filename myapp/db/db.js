var MongoClient = require('mongodb').MongoClient;

module.exports = function () {
    MongoClient.connect('mongodb://localhost:27017/demo', function(err, db) {
      if (err) {
        throw err;
      }
    //   db.collection('users').find({name: 1}).toArray(function(err, result) {
    //     if (err) {
    //       throw err;
    //     }
    //     console.info('this is db');
    //     console.log(result);
      //
    //   });
      db.collection('users').findOne({name: 1}, function(err, result) {
        if (err) {
          throw err;
        }
        console.info('this is db findone');
        console.log(result);

      });
    });
}
