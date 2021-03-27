// from data.js
var tableData = data;

// YOUR CODE HERE!
//Get a reference to the table body
var tbody = d3.select("tbody");

//Select button
var button = d3.select("#button");

//select form
var form = d3.select("#form");

//create event handlers
button.on("click", runEnter);
form.on("submit", runEnter);

//Use arrow functions and d3 to update each cell with UFO Sighting data
// data.forEach((ufoSighting) => {
//     var row = tbody.append("tr");
//     Object.entries(ufoSighting).forEach(([key, value]) => {
//         var cell = row.append("td");
//         cell.text(value);
//     });
// });

// Complete the event handler funtion for the form 
function runEnter() {

    //Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#patient-form-input");

    // Gdt the value property pf the input element
    var inputValue = inputElement.property("value");

    var filteredData = tableData.filter(date => date.datetime === inputValue);
    console.log(filteredData);

    filteredData.forEach((ufoSighting) => {
        var row = tbody.append("tr");
        Object.entries(ufoSighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}