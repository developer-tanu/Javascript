let num=[2,3,12,14,4]
let someOver18 = num.some(myFunction);
console.log("some values over 18"+ ' '+someOver18);
function myFunction(index,value,array)
{
   return value>=4;
}
