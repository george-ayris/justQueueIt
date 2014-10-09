define(['plugins/router', "durandal/system", "durandal/app", "knockout", "../models/musicHandler"], function (router, system, app, ko, music) {
    var vm = {};
    vm.searchTerm = ko.observable();
    vm.router = router;

    vm.search = function() {
        system.log("Searching for", vm.searchTerm());
        music.search(vm.searchTerm());
    };

    vm.activate = function() {
       router.map([
            { route: '', moduleId: 'viewmodels/home', title: "Home", nav: true },
            { route: 'music', moduleId: 'viewmodels/music', nav: true },
            /*{durandal:routes}*/
        ]).buildNavigationModel();

        return router.activate();
    };

    return vm;
});