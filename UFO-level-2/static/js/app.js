// from data.js
var tableData = data;

// YOUR CODE HERE!
//Get a reference to the table body
var tbody = d3.select("tbody");

//Use arrow functions and d3 to update each cell with UFO Sighting data
function showTable(data){
    tbody.html("")

    data.forEach((ufoSighting) => {
        var row = tbody.append("tr");
        Object.entries(ufoSighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}

let filters = {}

function setFilters(){

    let changeElement = d3.select(this).select("input");
    let elementValue = changeElement.property("value");
    let filterID = changeElement.attr("id");

    if(elementValue){
        filters[filterID] = elementValue
    } else {
        delete filters[filterID]
    }

    filterTable()
};

// Complete the event handler funtion for the form 
function filterTable(){
    let filteredData = tableData;

    Object.entries(filters).forEach(([key, value]) => {
        filteredData = filteredData.filter(row => row[key] === value)
    })

    showTable(filteredData)
};

d3.selectAll(".filter").on("change", setFilters)

showTable(tableData)