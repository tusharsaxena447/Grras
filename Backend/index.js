const fs = require("fs")
const os = require("os")


// let data = "hello"
// fs.writeFile('message.txt', data, (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
// });
const free = os.freemem()
const total = os.totalmem()

console.log(free/1024/1024/1024)
console.log(total/1024/1024/1024)

console.log(os.hostname())