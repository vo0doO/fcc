function checkCashRegister(price, cash, cid) {

    const nominal = [["ONE HUNDRED", 100], ["TWENTY", 20], ["TEN", 10], ["FIVE", 5], ["ONE", 1], ["QUARTER", 0.25], ["DIME", 0.1], ["NICKEL", 0.05], ["PENNY", 0.01]]
    const change = [["ONE HUNDRED", 0], ["TWENTY", 0], ["TEN", 0], ["FIVE", 0], ["ONE", 0], ["QUARTER", 0], ["DIME", 0], ["NICKEL", 0], ["PENNY", 0]]
    cid = cid.reverse()

    let amountSum = cid.map(i => i[1]).reduce((a, b) => a + b, 0)

    let amountChange = cash - price

    if (amountSum == amountChange) {
        return { status: "CLOSED", change: cid.reverse() }
    }

    for (let i = 0; i < cid.length; i++) {
        if (amountChange == 0) {
            return { status: "OPEN", change: change.filter(i => i[1] > 0).reverse() }
        }
        while (parseFloat(amountChange).toFixed(2) >= nominal[i][1] && cid[i][1] != 0) {
            change[i][1] += nominal[i][1]
            amountChange -= nominal[i][1]
            cid[i][1] -= nominal[i][1]
        }
    }

    let changeSum = change.map(i => i[1]).reduce((a, b) => a + b, 0)

    if (changeSum < amountChange) {
        return { status: "INSUFFICIENT_FUNDS", change: [] }
    }

    return { status: "OPEN", change: change.filter(i => i[1] > 0) }

}


module.exports = {
    checkCashRegister
}