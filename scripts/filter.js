let number=[2,4,5,7];
let num=number.filter(myFunc);
function myFunc(value,index,array)
{
    if(value>3)
    console.log(value);
}