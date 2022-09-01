function dropElementsWithFilterAndSlice(arr, func) {
    return arr.filter(func).length > 0 ? arr.slice(arr.indexOf(arr.filter(func)[0])) : []
}


module.exports = {
    dropElementsWithFilterAndSlice
}