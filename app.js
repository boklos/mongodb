var MongoClient = require('mongodb').MongoClient
  , request = require('request');

MongoClient.connect('mongodb://localhost:27017/course', function(err, db) {
    if(err) throw err;

    request('http://www.reddit.com/r/technology/.json', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var obj = JSON.parse(body);

            var stories = obj.data.children.map(function (story) { return story.data; });//from the JSON file, it's obj.data.children.data
                                                                                        //map formats that last .data better
            db.collection('reddit').insert(stories, function (err, data) {
                    if(err) throw err;

                    console.dir(data);

                    db.close();
            });
        }
    });
});
