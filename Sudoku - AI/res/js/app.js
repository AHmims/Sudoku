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
    // fillTable();
    const data = getPositions();
    console.log(data);
    // 

}
// DEPRACTED
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
// 
function getPositions() {
    let lt = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
    let resData = {
        A: [],
        B: [],
        C: [],
        D: [],
        E: [],
        F: [],
        G: [],
        H: [],
        I: [],
    }
    let resIndexes = {
        A: [],
        B: [],
        C: [],
        D: [],
        E: [],
        F: [],
        G: [],
        H: [],
        I: [],
    }
    let rowI = 0;
    // looping for the nb of big table rows : 3
    for (let i = 0; i < 3; i++) {
        // i = 0 => 0 -> 9
        // i = 1 => 9 -> 18
        // i = 2 => 18 -> 27
        for (let j = 9 * i; j < 9 * (i + 1); j++) {
            // j represents the row index
            for (let y = 3 * j; y < 3 * (j + 1); y++) {
                if (j == 0 || j == 3 || j == 6) {
                    resData[lt[0]].push(lt[0] + (resData[lt[0]].length + 1));
                    resIndexes[lt[0]].push(y);
                } else if (j == 1 || j == 4 || j == 7) {
                    resData[lt[1]].push(lt[1] + (resData[lt[1]].length + 1));
                    resIndexes[lt[1]].push(y);
                } else if (j == 2 || j == 5 || j == 8) {
                    resData[lt[2]].push(lt[2] + (resData[lt[2]].length + 1));
                    resIndexes[lt[2]].push(y);
                } else if (j == 9 || j == 12 || j == 15) {
                    resData[lt[3]].push(lt[3] + (resData[lt[3]].length + 1));
                    resIndexes[lt[3]].push(y);
                } else if (j == 10 || j == 13 || j == 16) {
                    resData[lt[4]].push(lt[4] + (resData[lt[4]].length + 1));
                    resIndexes[lt[4]].push(y);
                } else if (j == 11 || j == 14 || j == 17) {
                    resData[lt[5]].push(lt[5] + (resData[lt[5]].length + 1));
                    resIndexes[lt[5]].push(y);
                } else if (j == 18 || j == 21 || j == 24) {
                    resData[lt[6]].push(lt[6] + (resData[lt[6]].length + 1));
                    resIndexes[lt[6]].push(y);
                } else if (j == 19 || j == 22 || j == 25) {
                    resData[lt[7]].push(lt[7] + (resData[lt[7]].length + 1));
                    resIndexes[lt[7]].push(y);
                } else if (j == 20 || j == 23 || j == 26) {
                    resData[lt[8]].push(lt[8] + (resData[lt[8]].length + 1));
                    resIndexes[lt[8]].push(y);
                }
            }
        }
    }
    // 
    return {
        resData,
        resIndexes
    };
}