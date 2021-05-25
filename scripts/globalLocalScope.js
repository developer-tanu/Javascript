let globalVar=5;//global var
function scopeChecking()
{ 
    let localVar=10;
    document.write("The local var is :" + localVar);
    document.write("The global var is :" + globalVar);

}
//error because you cant access local outside the scope
// let value = document.write("The local var is :" + localVar);
// document.write(value); 
scopeChecking();