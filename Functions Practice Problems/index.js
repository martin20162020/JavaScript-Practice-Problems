//Problem 1
longestWord = word =>{
    let sentence = word.split(' ');
    let longWord = 0;
    for (let i = 0; i < sentence.length; i++){
        if(sentence.length > longWord){
        longWord = sentence[i].length;
        }
    }
    return longWord;
}

let practiceProblemOne ="The dog ran into the park, and then went home";

console.log(longestWord(practiceProblemOne))


//Problem 2
vowelCount = word =>{
    let newWord = word.split("");
    let countingVowels = 0;
    let vowelsList = 'aeiouAEIOU';
    for(let i = 0; i < newWord.length; i++){
        if (vowelsList.indexOf(newWord[i]) !== -1){
            countingVowels ++;
        }
    }
    return countingVowels;
}

let examples = "Let's find all of the vowels."

console.log(vowelCount(examples))


//Problem 3
findingTheLetter = (sentence, letter) => {
    let newSentence = sentence.toLowerCase().split("");
    let countingLetters = 0;
    for (i = 0; i < newSentence.length; i++){
        if (newSentence[i] === letter){
            countingLetters ++
        }
    }
    return countingLetters;
}

console.log(findingTheLetter("Every letter in this sentence", "e"))

//Problem 4
isItPrime = number =>{
    if (number === 1){
        return `${number} IS a prime number`;
    } else if (number === 2){
        return `${number} IS a prime number`;
    } else{
        for (let i = 2; i < number; i++){
            if(number % i === 0 ){
                return `${number} is NOT a prime number`;
            }
        }
    }
    return `${number} IS a prime number`;
}

console.log(isItPrime(23))


//Problem 5
isItAPalindrome = word => {
    let newWord = word.split("").reverse().join("");
    if (newWord === word){
        return (`"${word}" IS a palindrome.`)
    } else{
        return (`"${word}" is NOT a palindrome.`)
    }
}

console.log(isItAPalindrome("racecar"))


//Problem 6
fizzBuzz = () => {
    for (let i = 1; i <= 100; i++){
        if (i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz");
        } else if (i % 3 === 0){
            console.log("Fizz");
        } else if (i % 5 === 0){
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
    return "End of game"
}

console.log(fizzBuzz())