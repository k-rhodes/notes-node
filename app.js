console.log('starting app');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');


//console.log(_.isString(true));
//console.log(_.isString("kyle"));

var filteredArray = _.uniq(['kyle', 1, 'kyle', 1, 2, 3, 4, 5]);
console.log(filteredArray);


//console.log('Results: ', notes.addNum(2,4));

// var user = os.userInfo();

// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`, function(err) {
//	if (err) {
//		console.log('Unable to write to file');
//	}
//});


