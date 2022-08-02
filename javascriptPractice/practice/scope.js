// function myLocalScope () {
//     let myVar = 5;
//     console.log(myVar)
// }

// myLocalScope()

// console.log(myVar) //this will give error because myVar is within a local scope 

var outerWear = "T-Shirt"

function myOutfit() {
    var outerWear = "sweater"
    return outerWear
}

console.log(myOutfit())
console.log(outerWear)