function checkCashRegister(price, cash, cid) {

    const amountArray = [["ONE HUNDRED", 100], ["TWENTY", 20], ["TEN", 10], ["FIVE", 5], ["ONE", 1], ["QUARTER", 0.25], ["DIME", 0.1], ["NICKEL", 0.05], ["PENNY", 0.01]]
    const change = [["ONE HUNDRED", 0], ["TWENTY", 0], ["TEN", 0], ["FIVE", 0], ["ONE", 0], ["QUARTER", 0], ["DIME", 0], ["NICKEL", 0], ["PENNY", 0]]
    cid = cid.reverse()

    let amountSum = cid.map(i => i[1]).reduce((a, b) => a + b, 0)

    let amountChange = cash - price

    if (amountSum == amountChange) {
        return { status: "CLOSED", change: cid }
    }

    else {
        return {
            "status": "OPEN",
            "change": []
        }
    }

}


module.exports = {
    checkCashRegister
}