var MongoClient = require('mongodb').MongoClient; // created a var object to handle through it the methods

// Open the connection to the server
MongoClient.connect('mongodb://127.0.0.1:27017/test', function(err, db) { // function(err,db) is a callback fn, executes after the connection
    if(err) throw err;                                                   // now the data is in var object "db" where we handle the database

    // Find one document in our collection
    db.collection('coll').findOne({}, function(err, doc) {

        if(err) throw err;

        // Print the result. 
        // Will print a null if there are no documents in the db.
        console.dir(doc);

        // Close the DB
        db.close();
    });

    // Declare success
    console.dir("Called findOne!");
});
