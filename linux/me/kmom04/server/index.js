#!/bin/env node

/**
 * Read environment variable and show its value, if its defined.
 */
"use strict";
import server from "./server.js";

const path = require('path');
const fs = require("fs");

console.log(process.env.LINUX_PORT);

if ('LINUX_PORT' in process.env) {
    console.log(`LINUX_PORT is set to '${process.env.LINUX_PORT}'`);
}
else {
    console.log("LINUX_PORT is not set.");
    var port = process.env.LINUX_PORT=1337;

    console.log(process.env.LINUX_PORT);
}
// Start the server to listen on a port
server.listen(port);

// Write pid to file
var pidFile = path.join(__dirname, "pid");
fs.writeFile(pidFile, process.pid, function(err) {
    if (err) {
        return console.log(err);
    }

    console.log("Wrote process id to file 'pid'");
});

console.log("Simple server listen on port 1337 with process id " + process.pid);
