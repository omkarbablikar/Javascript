let num = [1,2,3,45,56]
// delete num[0]   //length don't change
console.log(num)
console.log(num.length)

 let num2 = [22,23,24,25]
 let merge = num.concat(num2) //does not change original array
 console.log(merge)

 //Sort method
 let compare = (a,b) =>
 {
    return b-a
 }
 let num3 = [551,223,4564,767,789,3453,323]
 let c = num3.sort(compare)
 console.log(c)  //changes original array

console.log(num3.reverse())

//Splice and Slice
let num4 = [551,23,232,23,,34,78]
num.splice(2,f)