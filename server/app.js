var connect = require('connect')
  , serveStatic = require('serve-static');

// var projectRoot = __dirname.substring(0, __dirname.length - 7);
var indexLocation = './';
console.log(indexLocation);

var app = connect();
app.use(serveStatic(indexLocation));
// app.use(function(req, res) {
//   res.end("Hello");
// });
var server = app.listen(3000);

// var io = require('socket.io').listen(server);

