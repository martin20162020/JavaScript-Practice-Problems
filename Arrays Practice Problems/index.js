//Problem 1
takingInParameter = (arr, n) => arr.slice(0, n)

console.log(takingInParameter([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2))

//Problem 2
arrayToString = arr => arr.join(" ")

console.log(arrayToString(["Red", "Green", "White", "Black"]))

//Problem 3
sortArray = arr => arr.sort();
console.log(sortArray([-3, 8, 7, 6, 5, -4, 3, 2, 1]))
console.log(sortArray(["Red", "Orange", "Black", "White"]))

//Problem 4
let numbers = [1, 5, 5, 2, 5, 2, 1, 7, 8, 6]
const removingDuplicates = numbers.filter((number, index)=>{
    return numbers.indexOf(number) === index;
})

console.log(removingDuplicates)
