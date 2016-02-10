'use strict';
var express = require('express'),
    app = express(),
    _adjectives = require('./data/adjective.json'),
    _backstory = require('./data/backstory.json'),
    _class = require('./data/class.json'),
    _location = require('./data/location.json'),
    _race = require('./data/race.json');


const PORT = process.env.PORT || '3000';

app.get('/', function(req,res) {
    res.send(generate());
});

function generate() {
    let a = _adjectives[randomIntFromInterval(0, _adjectives.length)];
    let r = _race[randomIntFromInterval(0, _race.length)];
    let c = _class[randomIntFromInterval(0, _class.length)];
    let l = _location[randomIntFromInterval(0, _location.length)];
    let b = _backstory[randomIntFromInterval(0, _backstory.length)];

    return `${a} ${r} ${c} from ${l} who ${b}`;
}

function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

var server = app.listen(PORT, function() {
    console.log('Random DnD system listening at http://localhost:%s', PORT);
});