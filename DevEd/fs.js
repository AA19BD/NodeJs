const fs = require("fs");

// fs.writeFile("message.txt", "Hello there!", (err) => {//can take a time
//     if(err) throw err;

//     console.log('file has been written!');
// });

fs.readFile("./message.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
