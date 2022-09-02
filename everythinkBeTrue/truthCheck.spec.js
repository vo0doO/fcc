const assert = require("assert");
const { truthCheck } = require("./truthCheck");


describe("Everythink Be True", ()=>{
    it("truthCheck([{name: \"Quinc\", role: \"Founder\", isBot: false},... должен вернуть false", ()=>{
        assert.deepEqual(false, truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot"))
    })
    
    it("truthCheck([{name: \"Quincy\", role: \"Founder\", isBot: false},... должен вернуть true", ()=>{
        assert.deepEqual(true, truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "name"))
    })
    
    it("truthCheck([{name: \"Quincy\", role: \"Founder\", isBot: false},... должен вернуть false", ()=>{
        assert.deepEqual(false, truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "role"))
    })
    
    it("truthCheck([{name: \"Pikachu\", number: 25, caught: 3},... должен вернуть true", ()=>{
        assert.deepEqual(true, truthCheck([{name: "Pikachu", number: 25, caught: 3}, {name: "Togepi", number: 175, caught: 1}], "number"))
    })
    
    it("truthCheck([{name: \"Pikachu\", number: 25, caught: 3},... должен вернуть false", ()=>{
        assert.deepEqual(false, truthCheck([{name: "Pikachu", number: 25, caught: 3}, {name: "Togepi", number: 175, caught: 1}, {name: "MissingNo", number: NaN, caught: 0}], "caught"))
    })
    
    it("truthCheck([{name: \"Pikachu\", number: 25, caught: 3},... должен вернуть false", ()=>{
        assert.deepEqual(false, truthCheck([{name: "Pikachu", number: 25, caught: 3}, {name: "Togepi", number: 175, caught: 1}, {name: "MissingNo", number: NaN, caught: 0}], "number"))
    })
    
    it("truthCheck([{name: \"Quincy\", username: \"QuincyLarson\"},... должен вернуть false", ()=>{
        assert.deepEqual(false, truthCheck([{name: "Quincy", username: "QuincyLarson"}, {name: "Naomi", username: "nhcarrigan"}, {name: "Camperbot"}], "username"))
    })
    
    it("truthCheck([{name: \"freeCodeCamp\", users: [{name: \"Quincy\"}, {name: \"Naomi\"}]},... должен вернуть true", ()=>{
        assert.deepEqual(true, truthCheck([{name: "freeCodeCamp", users: [{name: "Quincy"}, {name: "Naomi"}]}, {name: "Code Radio", users: [{name: "Camperbot"}]}, {name: "", users: []}], "users"))
    })
    
    it("truthCheck([{id: 1, data: {url: \"https://freecodecamp.org\", name: \"freeCodeCamp\"}},... должен вернуть true", ()=>{
        assert.deepEqual(true, truthCheck([{id: 1, data: {url: "https://freecodecamp.org", name: "freeCodeCamp"}}, {id: 2, data: {url: "https://coderadio.freecodecamp.org/", name: "CodeRadio"}}, {id: null, data: {}}], "data"))
    })
    
    it("truthCheck([{id: 1, data: {url: \"https://freecodecamp.org\", name: \"freeCodeCamp\"}},... должен вернуть false", ()=>{
        assert.deepEqual(false, truthCheck([{id: 1, data: {url: "https://freecodecamp.org", name: "freeCodeCamp"}}, {id: 2, data: {url: "https://coderadio.freecodecamp.org/", name: "CodeRadio"}}, {id: null, data: {}}], "id"))
    })    
})