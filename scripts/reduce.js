let numbers1 = [45, 4, 9, 16, 25];
let sum = numbers1.reduce(myFunction)
console.log(sum);
function myFunction(total, value, index, array)
{
  return total + value;
}
// myFunction();