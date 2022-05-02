 
// var input=+document.querySelector(".input").value;
// console.log(input)
var button=document.querySelector(".btn");
// var Ans=document.querySelector(".ans").innerHTML;
var incriment=document.querySelector(".inc");
var decriments=document.querySelector(".dec");


var val=1;
var ansVal=0;
button.addEventListener('click',updateByNumber);
incriment.addEventListener('click',incrimentNumber);
decriments.addEventListener('click',decriment);
function incrimentNumber(){
   
        ansVal+=val;
        document.querySelector(".ans").innerHTML=+ansVal;
    
   
}
 
function updateByNumber(event){
    event.preventDefault()
    var input=+document.querySelector(".input").value;
 if(input){

    val=input;}
    document.querySelector(".input").value="";
}

 
// console.log(incriment)

function decriment(){
  
    ansVal-=val;
    document.querySelector(".ans").innerHTML=+ansVal;


}