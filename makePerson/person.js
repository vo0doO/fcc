const Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  let fullName = firstAndLast;
  let firstName = fullName.split(" ")[0]
  let lastName = fullName.split(" ")[1]
  
  this.getFirstName = function() {
      return firstName
  }
  this.getLastName = function() {
      return lastName
  }
  this.getFullName = function() {
      return `${firstName} ${lastName}`
  }
  this.setFirstName = function(first) {
      firstName = first
  }
  this.setLastName = function(last) {
      lastName = last
  }
  this.setFullName = function(firstAndLast) {
      firstName = firstAndLast.split(" ")[0]
      lastName = firstAndLast.split(" ")[1]
  }
  return firstAndLast
};


module.exports = {
    Person
}