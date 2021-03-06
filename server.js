var express = require('express');
var app = express();
//var PORT = 3001;
var PORT = process.env.PORT || 3001;
var middleware = require('./middleware.js')

app.use(middleware.logger);

// app.get('/', function (req, res) {
//   res.send('Hello Express!');
// });

app.get('/about', middleware.requireAuthentication, function (req,res){
  res.send('About us!');
});

app.use(express.static(__dirname+'/public'));

//console.log(__dirname);

app.listen(PORT, function(){
  console.log ('Express server started and listening on port ' + PORT + '...');
});
