# ifc-processing-js
Processing ifc files using JS to generate the analytical model of a structure.

This repo is going to be using the `web-ifc` module mainly. This awesome project is stored [here](https://github.com/IFCjs/web-ifc) and [here](https://github.com/tomvandig/web-ifc).

## How to get this running

1. Clone the repo
2. Make sure you have [Node.js](https://nodejs.org/en) installed locally
2. Run `npm i` to install 
3. Run `node init.js`

## About the file structure
```
parser              All the scripts that help to parse the IFC file
├── parser.js       The handler for all the other files in this folder
├── readFile.js     The file reader
test                All the IFC files and others to test the project
init.js             Entry point
utils.js            Helpful functions to get some repetitive tasks done
└── 
```