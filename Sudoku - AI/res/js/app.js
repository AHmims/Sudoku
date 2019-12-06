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
        if (i == 1 || i == 4 || i == 7)
            row = document.createElement('tr');
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
        if (i == 3 || i == 6 || i == 9)
            mainTable.appendChild(row);
    }
    document.getElementById('board').appendChild(mainTable);
    fillTable();
}
// 
function fillTable() {
    let subTables = document.getElementsByClassName('tableSubTables');
    let tableSubColumns = document.getElementsByClassName('tableSubRows');
    let c = 0;
    for (let i = 0; i < subTables.length; i++) {
        // console.log(tableColumns[i]);
        let columnU = [];
        do {
            console.log(c);
            columnU.push[tableSubColumns[i + c]];
            c++;
        } while (c < 3);
        console.log(columnU);
    }
}