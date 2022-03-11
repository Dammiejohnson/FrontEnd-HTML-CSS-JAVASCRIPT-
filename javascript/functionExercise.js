// function callMe (phoneNumber, countryDial) {
//     if (phoneNumber !== ""){
//         countryDial(phoneNumber)
//     } else {
//         console.log("Enter a valid number")
//     }
// }

// const dial = (phoneNumber) => console.log(`calling ${phoneNumber}`)

// callMe("08022243865", dial)

//note that countryDial was a placeholder that later took in dial, it was also initialised as am arrow function.

let anArray = [1,2,3,4,5,6,7,8]

// function getEvenNumbers(anArray){
//     for(let i = 0; i < anArray.length; i++){
//         if( anArray[i] 
//             % 2 === 0){
//             process.stdout.write(anArray[i] + " ")
           
//         }
      
//     }
    
// }

// getEvenNumbers(anArray)
// console.log()

// anArray.forEach(element => element % 2 === 0? console.log(element) : "");

// (function oneLine(anArray){for (let i = 0; i < anArray.length; i++) {anArray[i] % 2 === 0 && process.stdout.write(anArray[i] + " ")}})([1,2,3,4,5,6,7,8])
// console.log()

let pseudo = {
    anArray: [1,2,3,4,5,6,7],
    pseudoForEach: function (iterator) {
        for (let i = 0; i < this.anArray.length; i++){
            iterator(this.anArray[i])
        }
    }
}

pseudo.pseudoForEach((value) => value % 2 === 0 && process.stdout.write(value + " "))



