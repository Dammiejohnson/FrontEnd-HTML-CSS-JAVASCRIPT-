function movement (person) {
    console.log(`when ${person.name} runs ${person.isWig ? "her wig falls" : "breeze blows her hair"}`)
}

// function animation (defineCharacterMovement) {
// let character  = {
//     name: "adeola",
//     isWig: true,
//     gender: "female",
//     getName: function () {
//         return this.name
//         }
//     }
//     defineCharacterMovement(character)
// }

// function createCharacter() {
//     let character  = {
//         name: "adeola",
//         isWig: true,
//         gender: "female",
//         getName: function () {
//             return this.name
//             }
//         }
//         return character
//     }

// let person = createCharacter()

// let getPersonName = person.getName.bind(person)

// let humanName = getPersonName()

//console.log (humanName)

//animation is an object that takes in a parameter which serves
// as a function, but this function also takes the parameter character
//character is a variable that holds an object which makes it an object 
// based on the key-value pairs that it holds.
//movement is the function that serves as the argument in the function animation
//but movement has its own parameter "person" which is used to call the keys of object character 

// animation(movement)

// animation((person) => {
//     console.log(`when ${person.name} runs ${person.isWig ? "her wig falls" : "breeze blows her hair"}`)
// }) // this is the same as the animation function call above  but instead of movement anoimation takes in an anonymous function

let person =  {
    username: "jerry",
    gender: "male",
    school: "unilag"

}

// for (key in person) {
//     console.log (person[key])
// }

console.log(Object.keys(person))


