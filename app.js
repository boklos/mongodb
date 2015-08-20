var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/weather', function(err, db) { if(err) throw err;

// db.collection('data').find();

db.collection('data').find().sort([["State" , 1] , ["Temperature" , -1]]).toArray(function(err, docs) {
    if(err) throw err;
    //console.log(doc);
    var res={};
    var newstate="";
    var month_high = [];

    for(var i=0; i < docs.length; i++) {
        //console.log("Doc : " + docs);
        var temperature = docs[i]["Temperature"];

        if(newstate != docs[i]["State"]) {
            month_high.push(docs[i]);
        }
            // update row
            newstate = docs[i]["State"];
     }    

     var numCallbacks = 0;
     for (i=0; i<month_high.length; i++) {
        db.collection('data').update(month_high[i], {"$set" : {"month_high" : true}},
            function(err, updated){
                if(err) throw err;
                console.log("Updated" + updated + "document month high");
                if (++numCallbacks == month_high.length){
                    return db.close();
                }

            });
     }

 });


            

});