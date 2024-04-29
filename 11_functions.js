function average(x,y){
    return Math.round((x+y)/2)
}

const sum = (p,q) =>{
    return p +q
}

const hello = () =>{
    console.log("How are you? I am toh fine yar")
}

let a = 1;
let b = 2;
let c = 4;

console.log("Average of a and b is ", average(a,b))
console.log("Average of b and c is ", average(b,c))
console.log("Average of a and c is ", average(a,c))
console.log(sum(9,7))
hello();