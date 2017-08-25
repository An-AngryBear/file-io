#!/usr/bin/env node 

const { readFileSync } = require('fs');

const theArg = process.argv[2];


if(theArg) {
    try {
        const data = readFileSync(theArg);
        process.stdout.write(data.toString());
    } catch (err) {
        console.log(err.stack);
    }
} else {
    process.exit();
}