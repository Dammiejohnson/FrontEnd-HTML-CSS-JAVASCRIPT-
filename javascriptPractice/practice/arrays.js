var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12],13,14]]

myArray.push(["happy", "joy"]) //adds to the last part of the array
myArray.pop() //removes the last element
myArray.shift() //removes the first element
myArray.unshift([2,4,5]) //adds an element to the beginning of the array


// var myData = myArray[3][0][0]

console.log(myArray) 

const numbers = [1,2,3];

const doubleNumArray = numbers.map((num) => {
    return num * 3;
})

console.log(numbers)
console.log(doubleNumArray)