const sortStatus = Object.freeze({
  NG: 0,
  INCREMENT: 1,
  DECREMENT: 2,
});

// Flag to track sort order (true for ascending, false for descending)
let isAscendingLastName = true;
function lastName(words) {
  var n = words.trim().split(" ");
  return n[n.length - 1];

}
function sortByLastName() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("tbl"); // Targeting the second table
  switching = true;
  shouldSwitch = sortStatus.NG;

  while (switching) {
    switching = false;
    rows = table.rows;

    for (i = 1; i < (rows.length - 1); i++) {
      x = rows[i].getElementsByTagName("TD")[1]; // Assuming last name is in the first column
      y = rows[i + 1].getElementsByTagName("TD")[1];

      // Compare values based on the current sort order
      if (isAscendingLastName) {
        // Ascending order
        if (lastName(x.innerHTML.toLowerCase())> lastName(y.innerHTML.toLowerCase())) {
          shouldSwitch = sortStatus.INCREMENT;
          break;
        }
      } else {
        // Descending order
        if (lastName(x.innerHTML.toLowerCase()) < lastName(y.innerHTML.toLowerCase())) {
          shouldSwitch = sortStatus.INCREMENT; // Invert the comparison
          break;
        }
      }
    }

    if (shouldSwitch == sortStatus.INCREMENT) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }

  // Toggle the sorting order for the next click
  isAscendingLastName = !isAscendingLastName;
}
let isAscendingYear = true;

function sortByYear() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("tbl"); // Assuming this is your table with dates
  switching = true;
  shouldSwitch = sortStatus.NG;

  while (switching) {
    switching = false;
    rows = table.rows;

    for (i = 1; i < (rows.length - 1); i++) {
      x = rows[i].getElementsByTagName("TD")[2]; // Assuming the date is in the third column
      y = rows[i + 1].getElementsByTagName("TD")[2];

      // Parse dates
      function parseDate(dateStr) {
        let parts = dateStr.split('/');
        return new Date(parts[2], parts[1] - 1, parts[0]);
      }
      
      const dateX = parseDate(x.innerHTML);
      const dateY = parseDate(y.innerHTML);
      // Compare values based onlet isAscendingYear = true;
      if (isAscendingYear) {
        // Ascending order
        if (dateX > dateY) {
          shouldSwitch = sortStatus.INCREMENT;
          break;
        }
      } else {
        // Descending order
        if (dateX < dateY) {
          shouldSwitch = sortStatus.INCREMENT; // Invert the comparison
          break;
        }
      }
    }

    if (shouldSwitch == sortStatus.INCREMENT) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }

  // Toggle the sorting order for the next click
  isAscendingYear = !isAscendingYear;
}
let isAscendingSex = true;

// Helper function to parse date in the format "day-month-year"
function parseDate(dateString) {
  const parts = dateString.split('-'); // Split by hyphen
  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10);
  const year = parseInt(parts[2], 10);
  return new Date(year, month - 1, day); // Month is 0-indexed in JavaScript
}

function sortBySex() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("tbl"); // Targeting the second table
  switching = true;
  shouldSwitch = sortStatus.NG;

  while (switching) {
    switching = false;
    rows = table.rows;

    for (i = 1; i < (rows.length - 1); i++) {
      x = rows[i].getElementsByTagName("TD")[3]; // Assuming sex is in the fourth column
      y = rows[i + 1].getElementsByTagName("TD")[3];

      // Compare values based on the current sort order
      if (isAscendingSex) {
        // Ascending order
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = sortStatus.INCREMENT;
          break;
        }
      } else {
        // Descending order
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch = sortStatus.INCREMENT; // Invert the comparison
          break;
        }
      }
    }

    if (shouldSwitch == sortStatus.INCREMENT) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }


  // Toggle the sorting order for the next click
  isAscendingSex = !isAscendingSex;
}

var chks = document.getElementsByName("chk");
for (let i = 0; i < chks.length; i++)
	chks[i].onchange = function() {
			if (this.checked) {
				this.parentNode.parentNode.classList.add("selectedr");
				let c = document.getElementsByName("chk");
				let j = 0;
				for (; j < c.length; j++) 
					if (!c[j].checked) break;
				if (j == c.length) document.getElementById("chkall").checked = true;
				else document.getElementById("chkall").checked = false;
				document.querySelector("div.group-op").classList.remove("nodisplay");
			} else {
				this.parentNode.parentNode.classList.remove("selectedr");
				document.getElementById("chkall").checked = false;
				let c = document.getElementsByName("chk");	
				let j = 0;		
				for (; j < c.length; j++)
					if (c[j].checked) break;
				if (j == c.length) document.querySelector("div.group-op").classList.add("nodisplay");
				else document.querySelector("div.group-op").classList.remove("nodisplay");
				
			}
	};

//
// Kích check all
//
document.getElementById("chkall").onchange = function() {
	let c = document.getElementsByName("chk");			
	for (let i = 0; i < c.length; i++) {
		c[i].checked = this.checked;
		if (c[i].checked) c[i].parentNode.parentNode.classList.add("selectedr");
		else c[i].parentNode.parentNode.classList.remove("selectedr");		
	}
	if (this.checked) document.querySelector("div.group-op").classList.remove("nodisplay");
	else document.querySelector("div.group-op").classList.add("nodisplay");
};


//
//	Xóa
//
document.querySelector(".group-op-delete").onclick = function() {
	let c = document.getElementsByName("chk");	 		
	for (let i = c.length-1; i >= 0; i--)
		if (c[i].checked) {
			c[i].parentNode.parentNode.parentNode.removeChild(c[i].parentNode.parentNode);
		}
};