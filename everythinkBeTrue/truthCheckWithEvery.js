function truthCheckWithEvery(collection, pre) {
    return collection.every(elem=>Boolean(elem[pre]))
}


module.exports = {
    truthCheckWithEvery
}