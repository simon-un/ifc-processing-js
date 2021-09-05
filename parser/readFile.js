const WebIFC = require('web-ifc/web-ifc-api-node');
const fs = require('fs');

const ifcApi = new WebIFC.IfcAPI();

/**
 * Reads an IFC file and returns the API object end the model id
 * @param {String} filename File name to parse with extension and relative path as if working on 'test' folder
 * @returns {{ifcApi: WebIFC.IfcAPI, modelID: Number}}
 */
async function loadIfcFile(filename){
    let ifcData = fs.readFileSync(filename);
    await ifcApi.Init();
    let modelID = ifcApi.OpenModel(new Uint8Array(ifcData));    
    return {ifcApi, modelID}
}

module.exports = {
    loadIfcFile
}