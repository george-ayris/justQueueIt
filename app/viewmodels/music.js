define(['durandal/system', 'durandal/app', '../models/musicHandler'], function (system, app, music) {
	var vm ={};

	vm.activate = function() {
		system.log("**");
	};

	vm.attached = function() {
		system.log('** attached catalog');
	};

	vm.canDeactivate = function() {
		return true;
	};

	vm.playButtonClicked = function() {
		system.log('play clicked');
		music.play();
	}

	return vm;
});