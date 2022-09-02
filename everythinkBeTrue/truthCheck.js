function truthCheck(collection, pre) {
    
    for(let i = 0; i < collection.length; i++) {
        if (!Boolean(collection[i][pre])) {
            return false
        }
    }

    return true
}


module.exports = {
    truthCheck
}