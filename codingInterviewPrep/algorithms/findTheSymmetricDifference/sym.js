function sym(...args) {
    const sortFunc = (a, b) => a - b
    return [
        ...new Set(
            args.reduce(
                (prev, curr, idx) => {
                    return prev.filter(
                        i => !curr.includes(i)
                    ).concat(
                        curr.filter(
                            i => !prev.includes(i)
                        )
                    )
                }
            )
        )
    ].sort(sortFunc)
}

module.exports = {
    sym
}