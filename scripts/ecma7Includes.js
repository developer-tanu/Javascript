let party=["google","microsoft","softobiz"];
// console.log(party.includes("micrsoft"));


let name=prompt('What is your name?!!');
let check=party.includes(name);
if(check === true)
{
    alert("welcome");
}
else
{
    alert ("not invited to party");
}
