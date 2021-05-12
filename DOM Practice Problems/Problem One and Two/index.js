//Problem One
document.querySelector("p").style.background = "pink";

//Problem Two 

gettingAttribute = () => {
    let getThisAttribute = document.getElementById("Google").href;
    return(`The href's attribute is: ${getThisAttribute}`);
}

console.log(gettingAttribute());

//Newer Solution Module-Reviewed

getHrefAtrribute = () => alert(document.getElementById("Google").href);