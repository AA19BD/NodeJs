const path = require("path");//built-in module

const fileLocation = path.join(__dirname,'app.js');
console.log(fileLocation)///Users/abylayaitbanov/Desktop/NodeJS/DevEd/app.js

const fileName= path.basename(fileLocation)
console.log(fileName)//app.js