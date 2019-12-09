var table = document.createElement('table');
table.className = "js_table";

for(var i = 0; i < 10; i++){
    var current_row = document.createElement('tr');
    table.appendChild(current_row);
    for(var j = 0; j < 10; j++){
        var current_data = document.createElement('td');
        // current_data.innerHTML = "&nbsp&nbsp&nbsp&nbsp";
        current_row.appendChild(current_data);
        if((i + j) % 2 == 0)
        current_data.style = "background-color: #444";
    else
        current_data.style = "background-color: #333";
    }
}

document.body.appendChild(table);

function on_generate_click() {
    var min = document.getElementById('min_num').value;
    var max = document.getElementById('max_num').value;

    console.info(min);

    for(var i = 0; i < 10; i++){
        var row = table.rows[i];
        let cell = null;
        for(var j = 0; j < 10; j++){
            cell = row.cells[j];
            // console.log(cell);
            cell.innerHTML = Math.floor(Math.random() * (max - min) + min + 1);
        }
    }
}