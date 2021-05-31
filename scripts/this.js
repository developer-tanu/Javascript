var person = {
  firstName: "tanu",
  lastName : "sharma",
  id     : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
document.write(person.fullName());
