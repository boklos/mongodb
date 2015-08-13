var express = require('express')
  , app = express() // Web framework to handle routing requests
  , cons = require('consolidate'); // Templating library adapter for Express

app.engine('html', cons.swig);
app.set('view engine', 'html');         //registering our routers
app.set('views', __dirname + '/views');
app.use(app.router);

// Handler for internal server errors
function errorHandler(err, req, res, next) {
    console.error(err.message);
    console.error(err.stack);                     //registering some eror handling
    res.status(500);
    res.render('error_template', { error: err });
}

app.use(errorHandler);

app.get('/:name', function(req, res, next) {  //: mens take this part from the URL and store it in a var called "name:"
    var name = req.params.name;               // store in inthe req.params object
    var getvar1 = req.query.getvar1;
    var getvar2 = req.query.getvar2;          // store it in req.query object
    res.render('hello', { name : name, getvar1 : getvar1, getvar2 : getvar2 });
});

app.listen(3000);
console.log('Express server listening on port 3000');
