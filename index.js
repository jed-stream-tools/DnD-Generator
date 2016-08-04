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
    let a = _adjectives[randomIntFromInterval(0, _adjectives.length -1)];
    let r = _race[randomIntFromInterval(0, _race.length -1)];
    let c = _class[randomIntFromInterval(0, _class.length -1)];
    let l = _location[randomIntFromInterval(0, _location.length -1)];
    let b = _backstory[randomIntFromInterval(0, _backstory.length -1)];

    let message = `${/(a|e|i|o|u)/g.test(a[0]) ? 'an' : 'a'} ${a} ${r} ${c} from ${l} who ${b}`;

    if (req.query.token) {
        message = `${req.query.user_name} you are ${message}`;
    }
    return message;
}

function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

var server = app.listen(PORT, function() {
    console.log('Random DnD system listening at http://localhost:%s', PORT);
});
