const assert = require("assert");
const { Person } = require("./person")



describe("Make a Person", ()=>{
    
    let bob = new Person("Bob Ross")
    
    it("Object.keys(bob).length должен вернуть 6", ()=>{
        assert.equal(6, Object.keys(bob).length)
    })

    it("bob instanceof Person", ()=>{
        assert.deepEqual(true, bob instanceof Person)
    })

    it("bob.firstName должен вернуть undefined", ()=>{
        assert.deepEqual(undefined, bob.firstName)
    })

    it("bob.lastName должен вернуть undefined", ()=>{
        assert.deepEqual(undefined, bob.lastName)
    }) 
    
    it("bob.getFirstName() должен вернуть Bob", ()=>{
        assert.equal("Bob", bob.getFirstName())
    })

    it("bob.getLastName() должен вернуть Ross", ()=>{
        assert.equal("Ross", bob.getLastName())
    })

    it("bob.getFullName() должен вернуть Bob Ross", ()=>{
        assert.equal("Bob Ross", bob.getFullName())
    })

    it("bob.getFullName() должен возвращать строку Haskell Ross после bob.setFirstName(\"Haskell\")", ()=>{
        bob.setFirstName("Haskell");
        assert.equal("Haskell Ross", bob.getFullName())
    })

    it("bob.getFullName() должен вернуть строку Haskell Curry after bob.setLastName(\"Curry\")", ()=>{
        bob.setLastName("Curry")
        assert.equal("Haskell Curry", bob.getFullName())
    })

    it("bob.getFullName() должен вернуть строку Haskell Curry after bob.setFullName(\"Haskell Curry\")", ()=>{
        bob = new Person('Bob Ross')
        bob.setFullName("Haskell Curry")
        assert.equal("Haskell Curry", bob.getFullName())
    })

    it("bob.getFirstName() должен вернуть строку Haskell after bob.setFullName(\"Haskell Curry\")", ()=>{
        bob = new Person('Bob Ross')
        bob.setFullName("Haskell Curry")
        assert.equal("Haskell", bob.getFirstName())
    })

    it("bob.getLastName() должен вернуть строку Curry after bob.setFullName(\"Haskell Curry\")", ()=>{
        bob = new Person('Bob Ross')
        bob.setFullName("Haskell Curry")
        assert.equal("Curry", bob.getLastName())
    })
})
