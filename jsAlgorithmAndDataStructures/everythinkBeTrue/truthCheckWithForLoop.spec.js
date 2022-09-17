const assert = require("assert");
const { truthCheckWithForLoop } = require("./truthCheckWithForLoop");


describe("Everythink Be True", ()=>{
    describe("With For Loop", ()=>{
        it("truthCheckWithForLoop([{name: \"Quinc\", role: \"Founder\", isBot: false},... должен вернуть false", ()=>{
            assert.deepEqual(false, truthCheckWithForLoop([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot"))
        })
        
        it("truthCheckWithForLoop([{name: \"Quincy\", role: \"Founder\", isBot: false},... должен вернуть true", ()=>{
            assert.deepEqual(true, truthCheckWithForLoop([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "name"))
        })
        
        it("truthCheckWithForLoop([{name: \"Quincy\", role: \"Founder\", isBot: false},... должен вернуть false", ()=>{
            assert.deepEqual(false, truthCheckWithForLoop([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "role"))
        })
        
        it("truthCheckWithForLoop([{name: \"Pikachu\", number: 25, caught: 3},... должен вернуть true", ()=>{
            assert.deepEqual(true, truthCheckWithForLoop([{name: "Pikachu", number: 25, caught: 3}, {name: "Togepi", number: 175, caught: 1}], "number"))
        })
        
        it("truthCheckWithForLoop([{name: \"Pikachu\", number: 25, caught: 3},... должен вернуть false", ()=>{
            assert.deepEqual(false, truthCheckWithForLoop([{name: "Pikachu", number: 25, caught: 3}, {name: "Togepi", number: 175, caught: 1}, {name: "MissingNo", number: NaN, caught: 0}], "caught"))
        })
        
        it("truthCheckWithForLoop([{name: \"Pikachu\", number: 25, caught: 3},... должен вернуть false", ()=>{
            assert.deepEqual(false, truthCheckWithForLoop([{name: "Pikachu", number: 25, caught: 3}, {name: "Togepi", number: 175, caught: 1}, {name: "MissingNo", number: NaN, caught: 0}], "number"))
        })
        
        it("truthCheckWithForLoop([{name: \"Quincy\", username: \"QuincyLarson\"},... должен вернуть false", ()=>{
            assert.deepEqual(false, truthCheckWithForLoop([{name: "Quincy", username: "QuincyLarson"}, {name: "Naomi", username: "nhcarrigan"}, {name: "Camperbot"}], "username"))
        })
        
        it("truthCheckWithForLoop([{name: \"freeCodeCamp\", users: [{name: \"Quincy\"}, {name: \"Naomi\"}]},... должен вернуть true", ()=>{
            assert.deepEqual(true, truthCheckWithForLoop([{name: "freeCodeCamp", users: [{name: "Quincy"}, {name: "Naomi"}]}, {name: "Code Radio", users: [{name: "Camperbot"}]}, {name: "", users: []}], "users"))
        })
        
        it("truthCheckWithForLoop([{id: 1, data: {url: \"https://freecodecamp.org\", name: \"freeCodeCamp\"}},... должен вернуть true", ()=>{
            assert.deepEqual(true, truthCheckWithForLoop([{id: 1, data: {url: "https://freecodecamp.org", name: "freeCodeCamp"}}, {id: 2, data: {url: "https://coderadio.freecodecamp.org/", name: "CodeRadio"}}, {id: null, data: {}}], "data"))
        })
        
        it("truthCheckWithForLoop([{id: 1, data: {url: \"https://freecodecamp.org\", name: \"freeCodeCamp\"}},... должен вернуть false", ()=>{
            assert.deepEqual(false, truthCheckWithForLoop([{id: 1, data: {url: "https://freecodecamp.org", name: "freeCodeCamp"}}, {id: 2, data: {url: "https://coderadio.freecodecamp.org/", name: "CodeRadio"}}, {id: null, data: {}}], "id"))
        })  
    })  
})