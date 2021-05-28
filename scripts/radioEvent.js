function radioFun()
{
  let btn1 =  document.getElementById('radiobtn');
  let btn2 =  document.getElementById('radiobtn2');
  if(btn1.checked == true)
  {
    alert(btn1 + "js snippet is clicked" );
  }
  else if(btn2.checked == true)
  {
      alert(btn2 + "other button is clicked")
  }
 else{
     alert("not an option");
 }
}