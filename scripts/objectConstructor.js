function Person(person_name,person_age,person_designation)
{
    this.person_name=person_name;
    this.person_age=person_age;
    this.person_designation=person_designation;
    this.autoStart = function()
    {
        document.write('the body autostart by mind');
    }
}
let p1 = new Person("tanu sharma",21,'developer');
p1.autoStart();