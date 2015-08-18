var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/course', function(err, db) {
    if(err) throw err;

    var query = { 'name' : 'comments' };
    var sort = [];                        // if you have 2 documents with same {name:comments} you could sort them as which one FIRST to modify
    var operator = { '$inc' : { 'counter' : 1 } };
    var options = { 'new' : true };       // callback function to show the new modified document not the old one

    db.collection('counters').findAndModify(query, sort, operator, options, function(err, doc) {
        if(err) throw err;

        if (!doc) {
            console.log("No counter found for comments.");
        }
        else {
            console.log("Number of comments: " + doc.counter);
        }

        return db.close();
    });
});
