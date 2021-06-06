let num=[21,32,12,14,42]
let text=num.every(myFunction)
console.log(text);
function myFunction(index,value,array)
{
   return value>18;
}
// myFunction();