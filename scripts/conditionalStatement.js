//even or odd
let num = 6;
if(num%2 == 0)
{
    alert('even num');
}
else{
    alert('odd num');
}
// positive negative or zero
let nums = -2;
if (nums<0)
{
    document.write('negative number');
}
else if(nums>0)
{
    document.write('positive number');
}
else
{
    document.write('zero');
}
// number is positive but even or odd
let check=4;
if(num>0)
{
    document.write('yes number is positive');
    if(num%2==0)
    {
        document.write('even number too');
    }
    else
    {
        document.write('odd number oops')
    }
}
else{
    document.write('oops number is negative');
}