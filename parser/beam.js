// Start exploring the objects to get the data from the beam I need

const WebIFC = require("web-ifc/web-ifc-api-node");
const fs = require("fs");

/**
 * Reads all the beams form the file
 * @param {WebIFC.IfcAPI} ifc_api
 * @param {Number} modelID
 */
const getAllBeams = (ifc_api, modelID) => {
    let properties = ifc_api.GetLineIDsWithType(modelID, WebIFC.IFCBEAM);
    for (let i = 0; i < properties.size(); i++) {
        let expressID = properties.get(i);
        console.log(ifc_api.GetLine(modelID, expressID));
    }
    console.log(properties);
    fs.writeFileSync("test.json", JSON.stringify(properties));
};

module.exports = {
    getAllBeams,
};