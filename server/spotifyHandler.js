var exports = module.exports = {};

exports.spotifyTest = function() {
    var options = {
        appkeyFile: './spotify_appkey.key',
        cacheFolder: 'cache',
        settingsFolder: 'settings'
    };
    var spotify = require('node-spotify')(options);

    var ready = function() {
        console.log('node-spotify is ready to exeute more code!');
        //your apps functionality should start here
    };
    spotify.on({
        ready: ready
    });
};

return module.exports ;
