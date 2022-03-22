const WebIFC = require("web-ifc/web-ifc-api-node");
const fs = require("fs");

const ifc_api = new WebIFC.IfcAPI();

/**
 * Reads an IFC file and returns the API object end the model id
 * @param {String} filename File name to parse with extension and relative path as if working on 'test' folder
 * @returns {{ifc_api: WebIFC.IfcAPI, modelID: Number}}
 */
async function loadIfcFile(filename) {
    let ifcData = fs.readFileSync(filename);
    await ifc_api.Init();
    let modelID = ifc_api.OpenModel(new Uint8Array(ifcData));
    return { ifc_api, modelID };
}

module.exports = {
    loadIfcFile,
};
