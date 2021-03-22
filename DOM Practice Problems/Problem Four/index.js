//Problem 4

findingTheItems = () => {
    let singleItem = document.getElementById("mySelect");
    for( let i = 0; i < singleItem.length; i++){
        console.log(i + 1 + " " + singleItem.options[i].text);
    }
}

console.log(findingTheItems())