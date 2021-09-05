/**
 * Returns the enlapsed time in the format #.##s from the given start_time
 * @param {Number} start_time Time.now() when the application started to run
 * @returns {Number}
 */
function getEnlapsedSeconds(start_time){
    const current_time = Date.now();
    return ((current_time - start_time)/1000).toFixed(2) + 's'
}

module.exports = {
    getEnlapsedSeconds
}