// console.log("Hello World")

// function getName(name) {
//     // return name 
//     // note that using the return keyword would not output anything unless console.log is used
//     console.log(name)
//     //using this will print the string passed as an argument in the method call below.
// }
// getName("Oluwadamilola")

// function checkHeight(name, height) {
//    return height >= "4ft" && name + " is close to the ground"
// }

// console.log(checkHeight("Lekan", "5ft"))

const multiplication = (number) => {
    for (let i = 0; i <= 12; i++){
        //console.log(number + " * " + i + " = " + (number * i))
        console.log(`${number} * ${i} = ${number * i}`) //this is a template literal
    }
}

const addition = (number) => {
    for (let i = 0; i <= 12; i++){
        //console.log(number + " + " + i + " = " + (number + i))
        console.log(`${number} + ${i} = ${number + i}`)
    }
}

function doArithmetic(aFunction) {
    let x = 2
    aFunction(x)
}

// doArithmetic(multiplication)
// console.log()
// doArithmetic(addition)

const drinkWater = function() {
    console.log("drink water")
}
const drinkWater2 = () => {
    console.log("drink water 2")
}

//Anonymous functions in the codes above are 
//function() { console.log("drink water")} and => {console.log("drink water 2")}

// doArithmetic((element) => {
//     for (let y = 0; y < 12; y++) {
//         y >= element ? console.log(`${y} / ${element} = ${y / element}`) : console.log(y)
//     }
// })

const cookFood = function () {
    return (food) => {
        return food
    } //cookeFood is a constant variable that is assigned an anonymous function that returns another
} // anonymous funtion which takesin a parameter food and returns it.

// const testBeans = cookFood()
// console.log(testBeans("EWA"))

//A FUNCTION THAT TAKES A FUNCTION AND RETURNS A FUNCTION

const returnFunction = (aFunction) => {
    return aFunction
}

// const yetAnotherFunction = returnFunction (() => console.log("Ekaabo"))

// yetAnotherFunction()

const toggleLight = (event, callMeBack) => {
    switch(event) {
        case "walkedIn": 
             callMeBack("Switch On")
            break;
        case "walkedOut":
              callMeBack("Switch Off")
            break;
        default:
            console.log("LIghts off")
            break;
    }
}

// toggleLight("walkedIn", (data) => console.log (`lights are ${data}`))
// toggleLight("walkedOut", (data) => console.log (`lights are ${data}`))
// toggleLight("walkedOnWater", (data) => console.log (`lights are ${data}`))


// function sayHi(){
//     for (let i = 0; i < 12; i++) {
//         console.log(i)
//     }
// }

// sayHi()

let username = "Tolu"

function changeName(name){
    name = "balikis"
    //console.log(name)
}

changeName(username)
console.log(username)
