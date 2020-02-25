var mysql = require('mysql');
var _ = require('underscore');


var con = mysql.createConnection({
    host: "localhost",
    user: "dplehn",
    password: "krinte99",
    database: "dplehn",
    port: "8889"
});

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT Name,Vorname FROM Mitarbeiter", function (err, result, fields) {
        if (err) throw err;
        console.log(_.first(fields));
    });
});

var person = {};
person.friends = {
    name1: true,
    name2: false,
    name3: true,
    name4: true
};

_.each(['name4', 'name2'], function(name){
    // this refers to the friends property of the person object
    console.log(this[name]);
}, person.friends);