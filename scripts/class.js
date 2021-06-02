class User
{
    constructor(fname,lname)
    {
        this.fname=fname;
        this.lname=lname;
        // console.log(fname + ' ' +lname);
    }
    getFullName()
    {
        let fullName=`${this.fname} ${this.lname} is my fullname`;
        return fullName;
    }
    editName(newName)
    {
        const myName = newName.split(' ');
        this.fname = myName[0];
        this.lname = myName[1];
    }
}
const user1 = new User("tanu","sharma");
console.log(user1);
console.log(user1.getFullName());
user1.editName("Tanu Sharma");
console.log(user1.getFullName());
// const user2 = new User("kiran","sharma");