let str="visit Microsoft";
console.log(str.search(/Microsoft/,"Softobiz"));
let str1 = "Is this all there is?";
let patt1 = str1.match(/[h]/g); 
console.log(patt1);
let str2="1234567890"
console.log( str2.match(/[1-4]/g)); 
let str3="gree,gre,red,re,green,green,red";
console.log( str3.match(/(red|green)/g)); 
let str4 ="best 546 award";
document.write(str4.match(/\d/g));
let str5 = "this is my best";
document.write(str5.match(/\s/g));
document.write(str5.match(/\i/g));
//test method
let pat=/l/;
document.write(pat.test("hello world yooo"));


