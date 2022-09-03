const assert = require("assert");
const { orbitalPeriod } = require("./orbitalPeriod");


describe("Map the Debris", () => {

    it('orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]) должен вернуть [{name: "sputnik", orbitalPeriod: 86400}]', () => {
        assert.deepEqual([{ name: "sputnik", orbitalPeriod: 86400 }], orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]))
    })

    it('orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]) должен вернуть [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]', () => {
        assert.deepEqual([{ name: "iss", orbitalPeriod: 5557 }, { name: "hubble", orbitalPeriod: 5734 }, { name: "moon", orbitalPeriod: 2377399 }], orbitalPeriod([{ name: "iss", avgAlt: 413.6 }, { name: "hubble", avgAlt: 556.7 }, { name: "moon", avgAlt: 378632.553 }]))
    })
})
