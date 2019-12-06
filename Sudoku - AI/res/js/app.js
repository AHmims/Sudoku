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
            subColumn.innerText = " ";
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
    let tableSubRows = document.getElementsByClassName('tableSubRows');
    let tableColumns = document.getElementsByClassName('tableSubColumns');
    let c = 0,
        g = 0;
    for (let i = 0; i < subTables.length; i++) {
        let tableU = [],
            re = 0,
            mergedArrays = [],
            randomIndexes = [];
        // 
        while (re < 3) {
            // rowU.push[tableSubRows[c].innerText];
            // tableSubRows[c].innerText = c;
            let rowU = [],
                ree = 0;
            while (ree < 3) {
                rowU.push(g);
                g++;
                ree++;
                // console.log(g);
            }
            // 
            mergedArrays = mergedArrays.concat(rowU);
            // 
            tableU.push(rowU);
            c++;
            re++;
        }
        let nb = Math.floor(Math.random() * (3 - 1) + 1);
        // 
        for (let y = 0; y < nb; y++) {
            randomIndexes.push("-1");
        }
        let approve = true,
            y = 0;
        while (y < nb) {
            approve = true;
            // while (randomIndexes[y] == "-1") {
            while (approve) {
                let value = Math.floor(Math.random() * (mergedArrays[8] - mergedArrays[0]) + mergedArrays[0]);
                for (let x = 0; x < randomIndexes.length; x++) {
                    if (randomIndexes[x] == value) {
                        approve = false;
                        x = randomIndexes.length;
                    }
                }

                if (approve)
                    randomIndexes[y] = value;

                if (y >= nb) {
                    // approve = false;
                    // console.log(randomIndexes);
                }
            }
            // }
            y++;
        }
        //
        console.log(randomIndexes);
        for (let j = 0; j < randomIndexes.length; j++) {
            if (randomIndexes[j] != "-1")
                tableColumns[randomIndexes[j]].innerText = 0;
        }
        // 
        // console.table({
        //     nb,
        //     randomIndexes
        // });
        // console.log(mergedArrays);
        // console.log(tableU);
    }
}