/* 
        ## Process:

        - process.argv: an array that contains the command line arguments passed to the current process
        - process.pid: the ID of the current process
        - process.env: an object that contains the environment variables of the current process
        - process.exit()`: terminates the current process with an optional exit code


        ## Environment

          The environment in Node.js refers to the set of variables that are available to a program at runtime. These variables are stored in the `process.env` object, which is an object containing key-value pairs of environment variable names and values.
*/

// Notes App:

// import "./src/command.js";
import fs from "node:fs";

//ASYNC FILEREAD TEST:

//FS MODULE:

// fs.readFile("file.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data.toString());
//   }
// });

/* One of the most commonly used methods in the FS module is the `fs.readFile()` method, which reads the content of a file asynchronously and returns its content in a callback function. Another popular method is `fs.writeFile()`, which writes data to a file asynchronously.

Other frequently used methods include:

- `fs.mkdir()` to create a new directory
- `fs.readdir()` to read the contents of a directory
- `fs.stat()` to get information about a file
- `fs.unlink()` to delete a file
- `fs.rename()` to rename a file */
