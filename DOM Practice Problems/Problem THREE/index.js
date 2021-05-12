//Problem Three

addRows = () => {
    let theTable = document.getElementById("myTable").insertRow(0);
    let cell1 = theTable.insertCell(0).innerHTML = "Cell Inserted";
    let cell2 = theTable.insertCell(1).innerHTML = "Cell Inserted";
}

//Newer Solution Module-Reviewed

addingRows = () =>{
    let theTable = document.querySelector("tbody").insertRow();
    let cell1 = theTable.insertCell().innerHTML = "Cell 1 Inserted";
    let cell2 = theTable.insertCell().innerHTML = "Cell 2 Inserted";
}
