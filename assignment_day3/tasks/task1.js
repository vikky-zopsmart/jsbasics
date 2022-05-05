// 1. Create a function after which takes in a number (n)and a function (fn) and executes the function only after it has been called n number of times
// eg. 
// function hello() {
//     return "hello"
// }

// const helloAfter = after(3, hello);

// helloAfter() // returns nothing
// helloAfter() // returns nothing
// helloAfter() // returns nothing
// helloAfter() // returns "hello"


function hello(){
return "hello";
}

var count=0;
function after (key,hello){
   
    if(count===key){
        
       const ans= hello();
       console.log(ans);
   
    }
        count++;
 
}
 
// const ans=helloAfter(3,hello);
after(3,hello);
after(3,hello);
after(3,hello);
after(3,hello);//hello
 
 