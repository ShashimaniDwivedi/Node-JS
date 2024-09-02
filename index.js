const fs = require("fs");

const hello = "Hello World";
console.log(hello);
//************BLOCKING SYNCHRONOUS WAY******* */
// const txtIn = fs.readFileSync(
// 	"C:UsersManasDesktopNode JS\1-node-farmstarter\txtinput.txt",
// 	"utf-8"
// );
// console.log(txtIn);

// const txtIn = fs.readFileSync(
// 	"C:/Users/Manas/Desktop/Node JS/1-node-farm/starter/txt/input.txt",
// 	"utf-8"
// );
// console.log(txtIn);
// const txtOut = `This is what we know about the avocado ${txtIn}.\n Created on ${Date.now()}`;

// fs.writeFileSync(
// 	"C:/Users/Manas/Desktop/Node JS/1-node-farm/starter/txt/input.txt",
// 	txtOut
// );
// console.log("File Written");

//in Asynchronous way
fs.readFile(
	"C:/Users/Manas/Desktop/Node JS/1-node-farm/starter/txt/start.txt",
	"utf-8",
	(err, data1) => {
		fs.readFile(
			`C:/Users/Manas/Desktop/Node JS/1-node-farm/starter/txt/${data1}.txt`,
			"utf-8",
			(err, data2) => {
				if (err) return console.log("Error");
				console.log(data2);
				fs.readFile(
					"C:/Users/Manas/Desktop/Node JS/1-node-farm/starter/txt/append.txt",
					"utf-8",
					(err, data3) => {
						console.log(data3);
						fs.writeFile(
							"C:/Users/Manas/Desktop/Node JS/1-node-farm/starter/txt/final.txt",
							`${data2}\n${data3}`,
							"utf-8",
							(err) => {
								console.log("Your file has been written");
							}
						);
					}
				);
			}
		);
	}
);
