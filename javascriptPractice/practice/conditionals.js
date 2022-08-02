function trueOrFalse(wasTHatTrue) {
    if (wasTHatTrue) {
        return "Yes, that was true"
    }
    else { 
        return "No, that was false"
    }
}

console.log(trueOrFalse(false))

function testEqual(val) {
    if (val === 12) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(testEqual("12"))

//note that = is an assignment operator, == is an equality sign 
//but this tends to convert to the same data type while === is the most accurate strict equality sign
//the inequqality sign is != but strict is !==  
