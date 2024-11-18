const url = "https://jsonplaceholder.typicode.com/users";
let table = document.getElementById("table");
let row, cell;

// getDataXML();
getDataFetch()

async function getDataFetch() {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      jsonToTable(json)

    } catch (error) {
      console.error(error.message);
    }
  }


async function getDataXML() {
    // Create an XMLHttpRequest object
    const xhttp = new XMLHttpRequest();

    // Define a callback function
    xhttp.onload = function() {
        jsonToTable(JSON.parse(this.responseText))
    }

    // Send a request
    xhttp.open("GET", url);
    xhttp.send();
        
}
async function jsonToTable(response) {
    for (let i = 0; i < response.length; i++) {
        console.log("cell", cell)
        row = table.insertRow();
        cell= row.insertCell();
        cell.textContent = response[i].name;

        cell= row.insertCell();
        cell.textContent = response[i].username;

        cell= row.insertCell();
        cell.textContent = response[i].email;

        cell= row.insertCell();
        cell.textContent = response[i].phone;

        cell= row.insertCell();
        cell.textContent = response[i].company.name;

        cell= row.insertCell();
        cell.textContent = response[i].address.street;
    }
}
