// script.js

function insert_Row() {
    var tb = document.getElementById('sampleTable');
    var newRow = tb.insertRow(0); // Insert a new row at the beginning
    var cell1 = newRow.insertCell(0); // Insert a new cell in the new row at index 0
    var cell2 = newRow.insertCell(1); // Insert a new cell in the new row at index 1
    cell1.innerHTML = "New Cell1"; // Set content for cell1
    cell2.innerHTML = "New Cell2"; // Set content for cell2
}
