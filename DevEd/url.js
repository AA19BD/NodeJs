const url = require("url");

const address = "http://localhost:8080/default.html?year=2017&month=february";

const parsedUrl = url.parse(address,true);//1

//console.log(parsedUrl)//return the object
console.log(parsedUrl.query.year)