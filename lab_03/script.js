var table = document.createElement('table');
table.className = "js_table";

for(var i = 0; i < 10; i++){
    var current_row = document.createElement('tr');
    table.appendChild(current_row);
    for(var j = 0; j < 10; j++){
        var current_data = document.createElement('td');

        var styles = "text-align: right;\n"

        current_row.appendChild(current_data);
        if((i + j) % 2 == 0)
            styles += "background-color: #444;";
        else
            styles += "background-color: #333;";

        current_data.style = styles;
    }
}

document.body.appendChild(table);

function on_generate_click() {
    var min = parseInt(document.getElementById('min_num').value);
    var max = parseInt(document.getElementById('max_num').value);

    for(var i = 0; i < 10; i++){
        var row = table.rows[i];
        let cell = null;
        for(var j = 0; j < 10; j++){
            cell = row.cells[j];
            cell.innerHTML = Math.floor(Math.random() * (max - min) + min);
        }
    }
}
