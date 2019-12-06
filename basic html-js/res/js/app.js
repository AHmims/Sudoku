window.onload = () => {
    // 
    createTable();
}
// create empty table
function createTable() {
    let mainTable = document.createElement('table');
    mainTable.setAttribute('id', 'sudokuTable');
    // sub tables
    let row;
    for (let i = 1; i <= 9; i++) {
        switch (i) {
            case 1:
            case 4:
            case 7:
                row = document.createElement('tr');
                break;
        }
        // 
        let column = document.createElement('td');
        column.setAttribute('class', 'tableColumns');
        // 
        let subTable = document.createElement('table');
        subTable.setAttribute('class', 'tableSubTables');
        subTable.cellSpacing = "0px";
        let subRow;
        for (let y = 1; y <= 9; y++) {
            if (y == 1 || y == 4 || y == 7)
                subRow = document.createElement('tr');
            let subColumn = document.createElement('td');
            subColumn.setAttribute('class', 'tableSubColumns');
            subColumn.innerText = ".";
            subRow.appendChild(subColumn);
            subRow.setAttribute('class', 'tableSubRows');
            if (y == 3 || y == 6 || y == 9)
                subTable.appendChild(subRow);
        }
        // 
        column.appendChild(subTable);
        // 
        row.appendChild(column);
        row.setAttribute('class', 'tableRows');
        // 
        switch (i) {
            case 3:
            case 6:
            case 9:
                mainTable.appendChild(row);
        }
    }
    document.getElementById('board').appendChild(mainTable);
}