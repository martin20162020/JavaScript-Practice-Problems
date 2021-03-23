//Problem 1

findingTheFactorial = number =>{
    if (number === 0){
        return 1
    }
    return number * findingTheFactorial(number - 1)
}

console.log(findingTheFactorial(4))

//Problem 2

addingToArray = arr => (arr.length === 0) ? 0 : arr[0] + addingToArray(arr.slice(1))

console.log(addingToArray([1, 5, 3]))