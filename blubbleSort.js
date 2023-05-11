const fs = require("fs");


class bubbbleSort{

    function openFile(){
        
    }
}
var arrValues = null;
fs.readFile("1Millon.txt", (err, data) => {
    if (err) throw err;
    arrValues = data.toString().split(',');
});

console.log(arrValues)