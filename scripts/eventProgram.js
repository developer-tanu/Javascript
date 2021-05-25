function onClick()
{
     var str = document.getElementById('name').value;
     var pass= document.getElementById('pass').value;
     if(str == pass)
     {
     alert("Your name is" +str + "and password is" +pass);
     }
     else{
         alert("not matching");
     }

}