var express = require('express'), //var object to the express model
    app = express();              //create an instance to the app

app.get('/', function(req, res){ //all get requests with the "/" URL
    res.send('Hello World');
});

app.get('*', function(req, res){ //"*" means any route that was not handled by a previous handler
    res.send('Page Not Found', 404);
});

app.listen(8080);
console.log('Express server started on port 8080');

