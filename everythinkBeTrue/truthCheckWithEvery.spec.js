const assert = require("assert");
const { truthCheckWithEvery } = require("./truthCheckWithEvery");


describe("Everythink Be True", ()=>{
    describe("With Every", ()=>{
        it("truthCheckWithEvery([{name: \"Quinc\", role: \"Founder\", isBot: false},... должен вернуть false", ()=>{
            assert.deepEqual(false, truthCheckWithEvery([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot"))
        })
        
        it("truthCheckWithEvery([{name: \"Quincy\", role: \"Founder\", isBot: false},... должен вернуть true", ()=>{
            assert.deepEqual(true, truthCheckWithEvery([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "name"))
        })
        
        it("truthCheckWithEvery([{name: \"Quincy\", role: \"Founder\", isBot: false},... должен вернуть false", ()=>{
            assert.deepEqual(false, truthCheckWithEvery([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "role"))
        })
        
        it("truthCheckWithEvery([{name: \"Pikachu\", number: 25, caught: 3},... должен вернуть true", ()=>{
            assert.deepEqual(true, truthCheckWithEvery([{name: "Pikachu", number: 25, caught: 3}, {name: "Togepi", number: 175, caught: 1}], "number"))
        })
        
        it("truthCheckWithEvery([{name: \"Pikachu\", number: 25, caught: 3},... должен вернуть false", ()=>{
            assert.deepEqual(false, truthCheckWithEvery([{name: "Pikachu", number: 25, caught: 3}, {name: "Togepi", number: 175, caught: 1}, {name: "MissingNo", number: NaN, caught: 0}], "caught"))
        })
        
        it("truthCheckWithEvery([{name: \"Pikachu\", number: 25, caught: 3},... должен вернуть false", ()=>{
            assert.deepEqual(false, truthCheckWithEvery([{name: "Pikachu", number: 25, caught: 3}, {name: "Togepi", number: 175, caught: 1}, {name: "MissingNo", number: NaN, caught: 0}], "number"))
        })
        
        it("truthCheckWithEvery([{name: \"Quincy\", username: \"QuincyLarson\"},... должен вернуть false", ()=>{
            assert.deepEqual(false, truthCheckWithEvery([{name: "Quincy", username: "QuincyLarson"}, {name: "Naomi", username: "nhcarrigan"}, {name: "Camperbot"}], "username"))
        })
        
        it("truthCheckWithEvery([{name: \"freeCodeCamp\", users: [{name: \"Quincy\"}, {name: \"Naomi\"}]},... должен вернуть true", ()=>{
            assert.deepEqual(true, truthCheckWithEvery([{name: "freeCodeCamp", users: [{name: "Quincy"}, {name: "Naomi"}]}, {name: "Code Radio", users: [{name: "Camperbot"}]}, {name: "", users: []}], "users"))
        })
        
        it("truthCheckWithEvery([{id: 1, data: {url: \"https://freecodecamp.org\", name: \"freeCodeCamp\"}},... должен вернуть true", ()=>{
            assert.deepEqual(true, truthCheckWithEvery([{id: 1, data: {url: "https://freecodecamp.org", name: "freeCodeCamp"}}, {id: 2, data: {url: "https://coderadio.freecodecamp.org/", name: "CodeRadio"}}, {id: null, data: {}}], "data"))
        })
        
        it("truthCheckWithEvery([{id: 1, data: {url: \"https://freecodecamp.org\", name: \"freeCodeCamp\"}},... должен вернуть false", ()=>{
            assert.deepEqual(false, truthCheckWithEvery([{id: 1, data: {url: "https://freecodecamp.org", name: "freeCodeCamp"}}, {id: 2, data: {url: "https://coderadio.freecodecamp.org/", name: "CodeRadio"}}, {id: null, data: {}}], "id"))
        })    
    })
})