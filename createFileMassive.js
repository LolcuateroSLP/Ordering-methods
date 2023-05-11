const fs = require("fs");

var totalValues = 100000;
var arrValues = [];

for (let index = 0; index < totalValues; index++) {
    arrValues.push(index);
}
console.log("there");

var content = '';
for (let index = 0; index < totalValues; index++) {
    var randomNumber = Math.floor(Math.random() * arrValues.length);
    content = content + arrValues[randomNumber];
    if(arrValues.length != 1){
        content = content + ','
    }
    arrValues.splice(randomNumber,1);
}

fs.writeFile("1Millon.txt", content, (err) => {
    if (err) throw err;
    console.log("Completed!");
 });