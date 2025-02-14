var tableData = [];

export function createTable() {
  var table = document.getElementById("myTable");
  var columnsInput = document.getElementById("columns");
  var rowsInput = document.getElementById("rows");
  var columns = parseInt(columnsInput.value);
  var rows = parseInt(rowsInput.value);

   while (table.firstChild) {
    table.removeChild(table.firstChild);
  }

   
  var headerData = [];
  var headerRow = document.createElement("tr");
  for (var i = 0; i < columns; i++) {
    var th = document.createElement("th");
    th.setAttribute("contenteditable", "true");
    th.setAttribute("class", "editable-cell");
    th.addEventListener("input", updateCell);
    headerData.push("");  
    headerRow.appendChild(th);
  }
  table.appendChild(headerRow);

   tableData = [];   
  for (var i = 0; i < rows; i++) {
    var rowData = [];
    var row = document.createElement("tr");
    for (var j = 0; j < columns; j++) {
      var cell = document.createElement("td");
      cell.setAttribute("contenteditable", "true");
      cell.setAttribute("class", "editable-cell");
      cell.addEventListener("input", updateCell);
      rowData.push("");  
      row.appendChild(cell);
    }
    table.appendChild(row);
    tableData.push(rowData);   
  }
}

function updateCell(event) {
  var rowIndex = event.target.parentNode.rowIndex - 1;   
  var columnIndex = event.target.cellIndex;
  var value = event.target.textContent.trim();
  
   if (rowIndex >= 0 && columnIndex >= 0 && tableData[rowIndex]) {
    updateData(rowIndex, columnIndex, value);
  }
}

function updateData(row, col, value) {
   if (tableData[row] && tableData[row].length > col) {
    tableData[row][col] = value;
  } else {
    console.error("Invalid row or column index");
  }
}
