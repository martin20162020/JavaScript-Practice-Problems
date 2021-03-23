//Problem 1
const car = {
    name: "Volkswagen",
    color: "Red",
    year: 2017,
    model: "Volkswagen CC"
}

deletingProperty = () => {
    console.log(`Property deleted: ${delete car.year}`);
    return car;
}

console.log(deletingProperty());


//Problem 2
let people = [
    {firstName: "John", lastName: "Smith", age: 24},
    {firstName: "Matt", lastName: "Anderson", age: 23},
    {firstName: "Victoria", lastName: "Martin", age: 22},
    {firstName: "Emily", lastName: "Flinch", age: 22},
]

people.forEach(person => {
    console.log(`${person.firstName} ${person.lastName}`);
})


//Problem 3
const truck = {
    name: "Ford",
    color: "Red",
    year: "2017",
    model: "F-150 King Ranch"
}

const objectLength = () => Object.keys(truck.model).length

console.log(objectLength())


//Problem 4
const candy = {
    name: "Coffee Crisp",
    type: "Chocolate bar",
    calories: 260
}

const candyKey = (key, object) => key in object

console.log(candyKey("name", (candy)))


//Problem 5
const bookArray = [
    {author: "Bill Gates", title: "The Road Ahead", libraryID: 1254},
    {author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264},
    {author: "Suzanne Collins", title: "Mockingjay: THe Final Book of the Hunger Games", libraryID: 3245}
]

bookArray.sort(function (a, b){
    if (a.title.toLowerCase() < b.title.toLowerCase()){
        return -1
    } else if (a.title.toLowerCase() > b.title.toLowerCase()){
        return 1
    } else{
        return 0
    }
})

console.log(bookArray)

