define(['durandal/system'], function(system) {
	var API = {};

	API.play = function() {
		// Send request to server
		system.log('sending play music server request')
		var playRequest = $.post("play")
			.done(function() {
				system.log("music playing");
			})
			.fail(function() {
				system.log("play request failed");
			})
		return playRequest;
	};

	return API;
});