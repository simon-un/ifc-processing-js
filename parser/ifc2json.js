const WebIFC = require('web-ifc/web-ifc-api-node');
const fs = require('fs')
const geometryTypes = require("./geometryTypes").geometryTypes;

/**
 * Writes the parsed IFC to a JSON file
 * @param {WebIFC.IfcAPI} ifc_api
 * @param {Number} modelID
 * @param {String} out_filename Name of the output file with extension and relative path
 */
function writeJSONToFile(ifc_api, modelID, out_filename) {
    const all_items = {};
    const lines = ifc_api.GetAllLines(modelID);
    const exclude_geometry = false;
    for (let i = 1; i <= lines.size(); i++) {
        try {
            const itemID = lines.get(i);
            const props = ifc_api.GetLine(modelID, itemID);
            props.type = props.__proto__.constructor.name;
            if (!exclude_geometry || !geometryTypes.has(props.type)) {
                all_items[itemID] = props;
            }
        } catch (e) {
            console.log(e);
        }
    }
    fs.writeFileSync(out_filename, JSON.stringify(all_items))
}

module.exports = {
    writeJSONToFile
}
