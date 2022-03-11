let cohort = {
    number: 9,
    name: "technophile",
    noOfStudents: 31,
    isNormal: false
}

let{number} = cohort //this is destructuring, it is a means to break down an object
// console.log(number)

let newCohort = cohort;

newCohort.name = "interesting_stuff"

// console.log(newCohort.name)
// console.log(cohort.name)

let cohortNew = {...cohort} 
//this is the spread operator and it means that cohortNew still bears the same keys and values as cohort
//it is like the opposite of rest but based on usage

cohortNew.name = "cool_stuff"

// console.log(newCohort.name)
// console.log(cohort.name)
// console.log(cohortNew.name)

function doSomething (...params) {
    console.log(params)
}


// function doSomething(...stuff){
//     return function(){
//         stuff.forEach((stuff) => console.log(`Hi ${stuff}`)) 
//     }
// }

// doSomething("ujay", "ehi", "increase", "ajine")()

//doSomething("ujay", "ehi", "increase", "ajine", 7,9 ) 
// this is rest..it is more or less the opposite of spread
//this could be an  anlaogy of a bucket, meaining that the ...params is ready to print whatsoever number of parameters
//params is a variable name 

function doSomething(...stuff){
    (function(){
        stuff.forEach((stuff) => console.log(`Hi ${stuff}`)) 
    })()
}

doSomething("ujay", "ehi", "increase", "ajine")

