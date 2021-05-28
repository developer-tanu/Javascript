 function loop(x, comp)           // function which inceases its value until its greater or equal to a given parameter
{
    x += x;
    if(x >= comp)   {
        alert(x);
    }
    else
    {
        loop(x,comp);
    }
}
loop(4,2);