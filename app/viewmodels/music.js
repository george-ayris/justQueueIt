define(['durandal/system', 'durandal/app', '../models/musicHandler'], function (system, app, music, io) {
	var vm ={};

	vm.playButtonClicked = function() {
		system.log('play clicked');
		music.play();
	}

	return vm;
});