const Person = function (firstAndLast) {

    let [firstName, lastName] = firstAndLast.split(" ")

    this.getFirstName = function () {
        return firstName
    }
    this.getLastName = function () {
        return lastName
    }
    this.getFullName = function () {
        return `${firstName} ${lastName}`
    }
    this.setFirstName = function (first) {
        firstName = first
    }
    this.setLastName = function (last) {
        lastName = last
    }
    this.setFullName = function (firstAndLast) {
        [firstName, lastName] = firstAndLast.split(" ")
    }
};


module.exports = {
    Person
}