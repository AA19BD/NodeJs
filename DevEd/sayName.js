const sayName = () => {
  console.log("Hello there!");
};

const sayAddress = () => {
    console.log("Rom 123A9");
};
 
module.exports.sayName = sayName;
module.exports.sayAddress = sayAddress;