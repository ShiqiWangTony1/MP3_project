const util = require('util');
const EventEmitter = require('events');

function Playlist() {
    EventEmitter.call(this);
    this.tracks = [];
}
util.inherits(Playlist, EventEmitter);

Playlist.prototype.add = function(track, position) {
    this.tracks.splice(position, 0, track);
    this.emit('update');
};

Playlist.prototype.remove = function(track) {
    this.tracks = this.tracks.filter(t => t !== track);
    this.emit('update');
};

Playlist.prototype.show = function() {
    console.log('Tracks:', this.tracks);
};

// Test the Playlist
const playlist = new Playlist();
playlist.on('update', () => playlist.show());

playlist.add('Track 1', 0);
playlist.add('Track 2', 1);
playlist.add('Track 3', 2);
playlist.remove('Track 1');
