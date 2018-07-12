console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

// console.log(_.isString(true));
// console.log(_.isString('Diana'));

var filteredArray = _.uniq(['Diana', 1, 'Diana', 1, 2, 3, 4]);
console.log(filteredArray);

// console.log('Result: ', notes.add(10, -5));

// var res = notes.addNote();
// console.log(res);
// var user = os.userInfo();

// fs.appendFile('greetings.txt', `Hello, ${user.username}! You are ${notes.age}!` , function(err){
//     if (err){
//        console.log('Unable to write to file');
//     }
// });
