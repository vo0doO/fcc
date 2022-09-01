function steamrollArrayWithStupidForLoop(arr) {
    const nArr = []
    nextI:
    for(let i = 0; i < arr.length; i++) {
        if (arr[i].constructor.name !== "Array") {
            nArr.push(arr[i])
            continue nextI
        }
        nextJ:
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j].constructor.name !== "Array") {
                nArr.push(arr[i][j])
                continue nextJ
            }
            nextZ:
            for (let z = 0; z < arr[i][j].length; z++) {
                if (arr[i][j][z].constructor.name !== "Array") {
                    nArr.push(arr[i][j][z])
                    continue nextZ
                }
                nextX:
                for (let x = 0; x < arr[i][j][z].length; x++) {
                    if (arr[i][j][z][x].constructor.name !== "Array") {
                        nArr.push(arr[i][j][z][x])
                        continue nextX
                    }
                }
            }
        }
    }
    return nArr
}


module.exports = {
    steamrollArrayWithStupidForLoop
}