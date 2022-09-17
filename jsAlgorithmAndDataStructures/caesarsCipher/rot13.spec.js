const assert = require("assert");
const { rot13 } = require("./rot13");

describe("Caesars Chipher", () => {
    it('rot13("SERR PBQR PNZC") следует декодировать в строку FREE CODE CAMP', () => {
        assert.equal("FREE CODE CAMP", rot13("SERR PBQR PNZC"))
    })

    it('rot13("SERR CVMMN!") следует декодировать в строку FREE PIZZA!', () => {
        assert.equal("FREE PIZZA!", rot13("SERR CVMMN!"))
    })

    it('rot13("SERR YBIR?") следует декодировать в строку FREE LOVE?', () => {
        assert.equal("FREE LOVE?", rot13("SERR YBIR?"))
    })

    it('rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") следует декодировать в строку THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG', () => {
        assert.equal("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.", rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."))
    })
})
