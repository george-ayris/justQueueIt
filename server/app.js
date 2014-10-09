var connect = require('connect')
  , serveStatic = require('serve-static');

var indexLocation = '.';
console.log(indexLocation);

var app = connect();
app.use(serveStatic(indexLocation));
var server = app.listen(3000);

var io = require('socket.io').listen(server);
io.sockets.on('connection', function(socket) {

    socket.on('play', function(message, callback) {
	    console.log('play:', message);
    });

	socket.on('search', function(message, callback) {
	    console.log('search:', message);
    });
});