//Problem 1
longestWord = word =>{
    let sentence = word.split(' ');
    let longWord = "";
    for (let i = 0; i < sentence.length; i++){
        if(longWord.length < sentence[i].length){
        longWord = sentence[i];
        }
    }
    return longWord;
}

// console.log(longestWord("Try to find the longest word"))
// console.log(longestWord("Testing to see if this function is working and returning the longest word"))


//Newer Solution Module-Reviewed
findTheLongestWord = sentence =>{
    let newWord = sentence.split(" ");
    let longWord = "";
    newWord.forEach(word =>{
        if(longWord.length < word.length){
            longWord = word;
        }
    })
    return longWord;
}

console.log(findTheLongestWord("Try to find the longest word"));



//Problem 2
vowelCount = word =>{
    let newWord = word.toLowerCase().split("");
    let countingVowels = 0;
    let vowelsList = 'aeiou';
    for(let i = 0; i < newWord.length; i++){
        if (vowelsList.indexOf(newWord[i]) !== -1){
            countingVowels ++;
        }
    }
    return countingVowels;
}

// console.log(vowelCount("Finds All Of The Vowels."))

//Newer Solution Module-Reviewed
const vowelCounter = string =>{
    let vowelCount = 0;
    let newString = string.toLowerCase().split("");
    let allVowels = "aeiou".split("");

    newString.forEach(letter=>{
        allVowels.forEach(vowel=>{
            if(letter === vowel){
                vowelCount++;
            }
        })
    })
    console.log(` there are [${vowelCount}] vowels`);
}

vowelCounter("anywhere is fine by me");



//Problem 3
findingTheLetter = (sentence, letter) => {
    let newSentence = sentence.toLowerCase().split("");
    let countingLetters = 0;
    for (i = 0; i < newSentence.length; i++){
        if (newSentence[i] === letter){
            countingLetters++;
        }
    }
    return countingLetters;
}
// console.log(findingTheLetter("Every letter in this sentence", "e"))

//Newer Solution Module-Reviewed
const letterCounter = (string, letter) =>{
    countingLetters = 0;
    newString = string.toLowerCase().split("");
    
    newString.forEach(stringLetter =>{
        if(stringLetter === letter.toLowerCase()){
            ++ countingLetters;
        }
    })

    console.log(`The letter ${letter}, occurs ${countingLetters} times`);
}

letterCounter("Texas is cool", "T");


//Problem 4
isItPrime = number =>{
    if (number === 1 || number === 0){
        return `${number} is NOT prime number`;
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
console.log(isItPrime(0));


//Problem 5
isItAPalindrome = word => {
    let newWord = word.split("").reverse().join("");
    if (newWord === word){
        return (`"${word}" IS a palindrome.`);
    } else{
        return (`"${word}" is NOT a palindrome.`);
    }
}
// console.log(isItAPalindrome("racecar"))

//Newer Solution Module-Reviewed
const palindrome = string => string.toLowerCase() === string.toLowerCase().split("").reverse().join("");
console.log(palindrome("raceCar"));


//Problem 6
fizzBuzz = () => {
    let word = "";
    for (let i = 1; i <= 100; i++){
        if (i % 3 === 0){
            word += "Fizz";
        } else if (i % 5 === 0){
            word += "Buzz";
        } else {
            console.log(i);
        }
    }
    return word;
}
// console.log(fizzBuzz())

//Newer Solution Module-Reviewed
const fizzBuzzs = ()=>{
    let endGameResults = [];
    let remainingNumbers = [];

    for (let i = 1; i <= 100; i++){
        if(i % 3 === 0){
            endGameResults += " fizz";
        }
        else if (i % 5 === 0){
            endGameResults += "Buzz ";
        } else {
            remainingNumbers += i;
        }
    }
    console.log(endGameResults, remainingNumbers);

}