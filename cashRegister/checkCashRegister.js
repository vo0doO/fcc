function checkCashRegister(price, cash, cid) {
    return {
        "status": "INSUFFICIENT_FUNDS",
        "change": []
    }
}


module.exports = {
    checkCashRegister
}