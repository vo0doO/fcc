function orbitalPeriod(arr) {

    const GM = 398600.4418;
    const earthRadius = 6367.4447;

    function getOrbitalPeriod(planet) {
        planet["orbitalPeriod"] = Math.round((Math.PI * 2) * Math.sqrt((Math.pow(planet["avgAlt"] + earthRadius, 3) / GM)))
        const { name, orbitalPeriod } = planet
        return { name, orbitalPeriod }
    }
    
    return arr.map(getOrbitalPeriod)
}


module.exports = {
    orbitalPeriod
}