// 3. Create a function sum such that
// sum(1)(2)(3)(4)() // consoles 10
// sum(1)(2)()  // consoles 3
// sum() // consoles 0


function sum(a){
    if(a){
    return function(b){
        if(b){
            return sum(a+b);
        }else{
            return a;
        }
        }
    }else{
        return 0;
    }


}
const ans=sum(1)(2)(3)(4)();
console.log(ans)