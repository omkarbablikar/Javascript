//chapter 2 practice set
// problem no 1
let age = 15
age = Number.parseInt(age)
if(age>0 && age<20){
    console.log("your age lies between 10 and 20")
}
else{
    console.log("your age doesn't lies  between 10 and 20")
}

//problem no 2
let age1 = 15
switch(age1){
    case 12 :
    console.log("your age is 12")
    break;
    case 13 :
    console.log("your age is 13")
    break;
    case 14 :
    console.log("your age is 14")
    break;
    case 15 :
    console.log("your age is 15")
    break;
    default:
    console.log("Your age is not defined")
    break;
}


//problem no 3
let num = 15;
num = Number.parseInt(num)
if(num%2==0 && num%3==0)
{
    console.log("Number is divisible by 2 & 3")
}
else{
    console.log("Number is not divisible by 2 and 3")
}

//problem no 4
let num1 = 16;
num1 = Number.parseInt(num1)
if(num1%2==0 || num1%3==0)
{
    console.log("Number is divisible by 2 or 3")
}
else{
    console.log("Number is not divisible by 2 or 3")
}

//problem no 5
let age3 = 19;
let a3 = age3>18?"You can drive " : "You cannot drive";
console.log(a3)