var Node = require('./node');
var NodeList = require('./nodeList');

var data = [
    {rooms: 1, area: 350, type: 'apartment'},
    {rooms: 2, area: 300, type: 'apartment'},
    {rooms: 3, area: 300, type: 'apartment'},
    {rooms: 4, area: 250, type: 'apartment'},
    {rooms: 4, area: 500, type: 'apartment'},
    {rooms: 4, area: 400, type: 'apartment'},
    {rooms: 5, area: 450, type: 'apartment'},

    {rooms: 7,  area: 850,  type: 'house'},
    {rooms: 7,  area: 900,  type: 'house'},
    {rooms: 7,  area: 1200, type: 'house'},
    {rooms: 8,  area: 1500, type: 'house'},
    {rooms: 9,  area: 1300, type: 'house'},
    {rooms: 8,  area: 1240, type: 'house'},
    {rooms: 10, area: 1700, type: 'house'},
    {rooms: 9,  area: 1000, type: 'house'},

    {rooms: 1, area: 800,  type: 'flat'},
    {rooms: 3, area: 900,  type: 'flat'},
    {rooms: 2, area: 700,  type: 'flat'},
    {rooms: 1, area: 900,  type: 'flat'},
    {rooms: 2, area: 1150, type: 'flat'},
    {rooms: 1, area: 1000, type: 'flat'},
    {rooms: 2, area: 1200, type: 'flat'},
    {rooms: 1, area: 1300, type: 'flat'},
];

(function run(){
    var nodes = new NodeList(5);
    for (var i in data)
    {
        nodes.add( new Node(data[i]) );
    }
    var random_rooms = function(){return Math.round( Math.random() * 10 )};
    var random_area = function(){return Math.round( Math.random() * 2000 )};

    nodes.add( new Node({rooms: random_rooms(), area: random_area()}) );
    nodes.add( new Node({rooms: random_rooms(), area: random_area()}) );
    nodes.add( new Node({rooms: random_rooms(), area: random_area()}) );
    nodes.add( new Node({rooms: random_rooms(), area: random_area()}) );
    nodes.add( new Node({rooms: random_rooms(), area: random_area()}) );

    nodes.determineUnknown();
})();
