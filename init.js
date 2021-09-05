const { IfcAPI } = require('web-ifc/web-ifc-api-node');
const parser = require('./parser/parser')
const utils = require('./utils')

// Read the ifc file
const filename = 'test/5_Storeys_RectangularBeams.ifc';

const start_time = Date.now()
console.log('[0.00s] Started the application...');
(async () => {
    const {ifcApi, modelID} = await parser.loadIfcFile(filename)
    console.log(`[${utils.getEnlapsedSeconds(start_time)}] Read the file an got ${modelID} as modelID...`);
    console.log(ifcApi.GetLine(modelID, 185));
})();