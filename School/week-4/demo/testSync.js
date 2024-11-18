
const fs = require('fs');

function taskASync() {
    console.log("Task A Done")
}
function taskBSync() {
    fs.readFileSync('./example.txt', 'utf8'); // Reading file might take too long
    console.log("Task B Done");
}
function taskCSync() {
    console.log("Task C Done")
}

