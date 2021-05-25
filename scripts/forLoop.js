//table of 5 via for
let num = 5;
let result=0;
for(let i=1;i<=10;i++)
{
    result=num*i;
    document.write(num + '*' + i  + '=' + result);
    document.write("</br>");
}
//first 10 even num
for (let i=0;i<=50;i++)
{
    if(i%2==0)
    {
    document.write(i);
    document.write("</br>");
    }
}