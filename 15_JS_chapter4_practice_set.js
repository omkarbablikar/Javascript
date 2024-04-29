//Chapter 4 practice set
let str = "Har\""
console.log(str.length)


const str1 = "JavaScript";
const substr = str1.substr(4, 6); // Returns "Script"


let str2 = "please give me 1000 RS"
let amount = Number.parseInt(str2.slice("Please give me ".length))
console.log(amount)

let friend = "Omkar"
friend[2] = "R"
console.log(friend) //Strings are immutable cannot be changed 