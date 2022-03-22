const readFile = require('./readFile');
const beam = require('./beam');
const ifc2json = require('./ifc2json')

const loadIfcFile = readFile.loadIfcFile;
const getAllBeams = beam.getAllBeams;
const writeJSONToFile = ifc2json.writeJSONToFile;

module.exports = {
    loadIfcFile,
    getAllBeams,
    writeJSONToFile
};
