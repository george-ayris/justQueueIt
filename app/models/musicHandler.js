define(['durandal/system', 'socket.io/socket.io'], function(system, io) {
	var API = {};
	var socket = io.connect();

	socket.on('connect', function() {
		system.log('socket connected');
	});

	API.play = function() {
		// Send request to server
		system.log('sending play music server request')
		socket.emit('play', "play the music!");
	};

	API.search = function(searchTerm) {
		socket.emit('search', searchTerm);
	};

	return API;
});