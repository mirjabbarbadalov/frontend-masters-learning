// var fs = require("fs");
// var readerStream = fs.createReadStream("source.txt");

// readerStream.setEncoding("UTF8");

// readerStream.on("source.txt", function (chunk) {
//   data += chunk;
// });

// readerStream.on("end", function () {
//   console.log(data);
// });

// readerStream.on("error", function (err) {
//   console.log(err.stack);
// });

// console.log("Program Ended");

// var writerStream = fs.createWriteStream("output.txt");

// writerStream.end();

// writerStream.on("source.txt", function (chunk) {
//   writerStream.write(chunk);
// });

// writerStream.on("error", function (err) {
//   console.log(err.stack);
// });

// console.log("Program Ended");

const fs = require("fs");

const { Transform } = require("stream");

const readerStream = fs.createReadStream("source.txt", {
  highWaterMark: 2,
});

const writeStream = fs.createWriteStream(".final.txt");

const sendData = new Transform({
  transform(buffer, enc, cb) {
    const newFormat = buffer;
    cb(null, newFormat);
  },
});

readerStream.pipe(sendData).pipe(writeStream);
