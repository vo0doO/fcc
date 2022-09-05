function checkCashRegister(price, cash, cid) {

    const amountArray = [["ONE HUNDRED", 100], ["TWENTY", 20], ["TEN", 10], ["FIVE", 5], ["ONE", 1], ["QUARTER", 0.25], ["DIME", 0.1], ["NICKEL", 0.05], ["PENNY", 0.01]]

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