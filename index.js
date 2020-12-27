const chalk = require("chalk");
const green = chalk.green;
const red = chalk.red;

const fs = require("fs");

function writeFile(filename, content){
    if(typeof filename != "string") throw "Invalid filename";
    if(typeof content != "string") throw "Invalid content";
    try {
        fs.writeFileSync(filename, content);
        console.log(`[${green("+")}] ${filename}`);
    } catch (err) {
        console.log(`[${red("-")}] ${err.message}`);
    }
}

function writeDir(dirname){
    if(typeof dirname != "string") throw "Invalid dirname";
    try {
        fs.mkdirSync(dirname);
        console.log(`[${green("+")}] ${dirname}`);
    } catch (err) {
        console.log(`[${red("-")}] ${err.message}`);
    }
}

module.exports.writeFile = writeFile;
module.exports.writeDir = writeDir;