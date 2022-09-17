const assert = require("assert");
const { rot13WithSub } = require("./rot13WithSub");

describe("Caesars Chipher With Substring", () => {
    it('rot13WithSub("SERR PBQR PNZC") следует декодировать в строку FREE CODE CAMP', () => {
        assert.equal("FREE CODE CAMP", rot13WithSub("SERR PBQR PNZC"))
    })

    it('rot13WithSub("SERR CVMMN!") следует декодировать в строку FREE PIZZA!', () => {
        assert.equal("FREE PIZZA!", rot13WithSub("SERR CVMMN!"))
    })

    it('rot13WithSub("SERR YBIR?") следует декодировать в строку FREE LOVE?', () => {
        assert.equal("FREE LOVE?", rot13WithSub("SERR YBIR?"))
    })

    it('rot13WithSub("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") следует декодировать в строку THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG', () => {
        assert.equal("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.", rot13WithSub("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."))
    })
})