var a = 'love'
var a = 7
//Var is globally scoped while let & const are block scoped
//var can be updated and re-declared within its scope
let b = "harry"
//let can be updated but not be re-declared
let c = 7
{
    let b = "this"
    console.log(b)
}
console.log(b)

const author = "harry"
console.log(author)
//const can neither be updated nor be re-declared