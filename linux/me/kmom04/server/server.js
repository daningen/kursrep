#!/bin/env node

/**
 * Read environment variable and show its value, if its defined.
 */
'use strict';

var http = require('http');
var url = require('url');
var fs = require('fs');
//var index = fs.readFileSync('index.html');

var server = http.createServer((req, res) => {
        var ipAddress,
        urlParts,
        route,
        query,
        queryString;

        // Log incoming requests
        ipAddress = req.connection.remoteAddress;
        var qs = require('querystring');

        urlParts = url.parse(req.url, true);
        route = urlParts.pathname;
        query = urlParts.query;
        queryString = qs.stringify(query); //innehåller 2=&3=

        var util = require('util');
        console.log(util.inspect(query));

        console.log('Incoming route ' + route + ' from ip ' + ipAddress + ' with querystring ' + queryString);

        // Log incoming requests
        ipAddress = req.connection.remoteAddress;
        // Check what route is requested
        route = url.parse(req.url).pathname;
        console.log('Incoming route ' + route + ' from ip ' + ipAddress + ' with querystring ' + queryString);
        // Inspect the details of the object created for the query string
        console.log(util.inspect(query));
        var mySum = 0;
        // Loop through all query variables
        Object.keys(query).forEach(key => {
            console.log(`'${key}' : '${query[key]}'`);
            mySum += Number(key);
        });

        //function filterNr(theNr) {
        //   return theNr < 42;
        //}


        // Switch (route) on the path.
        switch (route) {
            case '/':
                // Home page route.
                console.log("route / anropas nu ");
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.end('Hello World\n');
            break;
            // About page route.
            case '/index.html':
                fs.readFile('index.html', null, function(error, data) {
                    if (error) {
                        res.writeHead(404);
                        res.write('File not found');
                    } else {
                        res.writeHead(200, {'Content-Type': 'text/html'});
                        //if (err) throw err;
                        console.log(data);
                        res.write(data);
                        res.end();
                    }
                });
            break;
            case '/status':
                var child = require('child_process');

                child.exec('uname -a', (error, stdout, stderr) => {
                                if (error || stderr) {
                                    console.log('Something went wrong...', error, stderr);
                                }

                                res.writeHead(200, {'Content-Type': 'application/json'});
                                var jsonObj = JSON.stringify(stdout);

                                // End the respons with the new string
                                res.end('uname: ' + jsonObj);
                            });
            break;

            case '/sum':
                // Home page route.
                // End the respons with the new string
                //console.log("Something went wrong...", mySum);
                var jsonObj1 = JSON.stringify(mySum);
                // End the respons with the new string
                res.writeHead(200, {'Content-Type': 'application/json'});
                res.end('{sum: ' + jsonObj1 + '} \n');

            break;

            case '/filter':
                //var numbersArray = [2, 3, 7, 42, 9];
                res.writeHead(200, {'Content-Type': 'application/json'});

                //var numbersArray = [];
                var arr = [];
                var jsonObj2 = {};
                Object.keys(query).forEach(key => {
                    console.log(`'${key}' : '${query[key]}'`);
                    //filter out number < 42
                    if (parseInt(key) < 42) {
                        console.log('the keee ' + key);
                        arr.push(key);
                    }
                    // arr = numbersArray.filter(function(key) {
                    //var arr = arr.filter(function(key) {
                    //     return key < 42;
                });
                console.log(arr);
                jsonObj2 = JSON.stringify('filter: ' + arr);
                console.log(jsonObj2);
                console.log('json');
                res.end(jsonObj2 + '\n');
            break;

            default:
                // Not found route.
                console.log('in the default route');
                res.writeHead(404, {'Content-Type': 'text/plain'});
                res.end('404. No route matching.\n');
            break;
        }
    });

// Export the server as a module.
export default server;
