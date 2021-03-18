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

console.log(longestWord("Try to find the longest word"))
console.log(longestWord("Testing to see if this function is working and returning the longest word"))


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

console.log(vowelCount("Finds All Of The Vowels."))


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

console.log(isItPrime(0))


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
    return word
}

console.log(fizzBuzz())