const fs = require("fs");

const hello = "Hello World";
console.log(hello);

// const txtIn = fs.readFileSync(
// 	"C:UsersManasDesktopNode JS\1-node-farmstarter\txtinput.txt",
// 	"utf-8"
// );
// console.log(txtIn);

const txtIn = fs.readFileSync(
	"C:/Users/Manas/Desktop/Node JS/1-node-farm/starter/txt/input.txt",
	"utf-8"
);
console.log(txtIn);
const txtOut = `This is what we know about the avocado ${txtIn}.\n Created on ${Date.now()}`;

fs.writeFileSync(
	"C:/Users/Manas/Desktop/Node JS/1-node-farm/starter/txt/input.txt",
	txtOut
);
console.log("File Written");
