const { IfcAPI } = require("web-ifc/web-ifc-api-node");
const parser = require("./parser/parser");
const utils = require("./utils");

// Read the ifc file
const filename = "test/5_Storeys_RectangularBeams.ifc";

const start_time = Date.now();
console.log("[0.00s] Started the application...");
(async () => {
    // Read the IFC file
    const { ifc_api, modelID } = await parser.loadIfcFile(filename);
    console.log(
        `[${utils.getEnlapsedSeconds(
            start_time
        )}] Read the file an got ${modelID} as modelID...`
    );
    console.log(ifc_api.GetLine(modelID, 185));
    // parser.getAllBeams(ifc_api, modelID)

    // Parse to json the whole model
    // parser.writeJSONToFile(ifc_api, modelID, 'result.json')

    ifc_api.CloseModel(modelID);
})();
