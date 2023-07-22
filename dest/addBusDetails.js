"use strict";
let availbuses = [
    {
        id: 101,
        name: 'morning star',
        source: 'parchur',
        destination: 'bangalore',
        seats: 28,
        price: 2000
    },
    {
        id: 102,
        name: 'Intercity',
        source: 'bangalore',
        destination: 'parchur',
        seats: 28,
        price: 1800
    },
    {
        id: 103,
        name: 'Komital Tavels',
        source: 'bangalore',
        destination: 'cpt',
        seats: 28,
        price: 1300,
    }
];
function addBus() {
    var _a;
    let bid = document.getElementById('bid');
    let tname = document.getElementById('tname');
    let boards = document.getElementById('boards');
    let stops = document.getElementById('stops');
    let savail = document.getElementById('savail');
    let cost = document.getElementById('cost');
    const table = (_a = document.getElementById('bavil')) === null || _a === void 0 ? void 0 : _a.getElementsByTagName('tbody')[0];
    let row = table === null || table === void 0 ? void 0 : table.insertRow();
    let cell = row === null || row === void 0 ? void 0 : row.insertCell();
    let val = bid.value;
    let tnode = document.createTextNode(val);
    cell === null || cell === void 0 ? void 0 : cell.appendChild(tnode);
    cell = row === null || row === void 0 ? void 0 : row.insertCell();
    val = tname.value;
    tnode = document.createTextNode(val);
    cell === null || cell === void 0 ? void 0 : cell.appendChild(tnode);
    cell = row === null || row === void 0 ? void 0 : row.insertCell();
    val = boards.value;
    tnode = document.createTextNode(val);
    cell === null || cell === void 0 ? void 0 : cell.appendChild(tnode);
    cell = row === null || row === void 0 ? void 0 : row.insertCell();
    val = stops.value;
    tnode = document.createTextNode(val);
    cell === null || cell === void 0 ? void 0 : cell.appendChild(tnode);
    cell = row === null || row === void 0 ? void 0 : row.insertCell();
    val = savail.value;
    tnode = document.createTextNode(val);
    cell === null || cell === void 0 ? void 0 : cell.appendChild(tnode);
    cell = row === null || row === void 0 ? void 0 : row.insertCell();
    val = cost.value;
    tnode = document.createTextNode(val);
    cell === null || cell === void 0 ? void 0 : cell.appendChild(tnode);
    cell = row === null || row === void 0 ? void 0 : row.insertCell();
    let button = document.createElement('button');
    button.setAttribute('class', 'btn');
    button.innerText = 'Delete';
    button.setAttribute('id', 'delete');
    button.addEventListener('click', () => {
        var _a;
        if (((_a = button.parentNode) === null || _a === void 0 ? void 0 : _a.parentNode) != null) {
            console.log(button.parentNode.parentNode.parentNode);
            button.parentNode.parentNode.parentNode.removeChild(button.parentNode.parentNode);
        }
    });
    cell === null || cell === void 0 ? void 0 : cell.appendChild(button);
    cell = row === null || row === void 0 ? void 0 : row.insertCell();
    let button2 = document.createElement('button');
    button2.setAttribute('class', 'btn');
    button2.innerText = 'Edit';
    button2.setAttribute('id', 'edit');
    button2.addEventListener('click', () => {
        var _a;
        if (((_a = button.parentNode) === null || _a === void 0 ? void 0 : _a.parentNode) != null) {
            let bid = document.getElementById('bid');
            let tname = document.getElementById('tname');
            let boards = document.getElementById('boards');
            let stops = document.getElementById('stops');
            let savail = document.getElementById('savail');
            let cost = document.getElementById('cost');
            let childNodes = button.parentNode.parentNode.childNodes;
            bid.value = childNodes[0].textContent;
            tname.value = childNodes[1].textContent;
            boards.value = childNodes[2].textContent;
            stops.value = childNodes[3].textContent;
            savail.value = childNodes[4].textContent;
            cost.value = childNodes[5].textContent;
            button.parentNode.parentNode.parentNode.removeChild(button.parentNode.parentNode);
            let busform = document.getElementById("addbus");
            busform.style.display = "block";
        }
    });
    cell === null || cell === void 0 ? void 0 : cell.appendChild(button2);
    bid.value = "";
    tname.value = "";
    boards.value = "";
    stops.value = "";
    savail.value = "";
    cost.value = "";
}
function displayForm() {
    let busform = document.getElementById("addbus");
    busform.style.display = "block";
}
function deleterow() {
    var _a;
    if (((_a = this.parentNode) === null || _a === void 0 ? void 0 : _a.parentNode) != null) {
        console.log(this);
        this.parentNode.parentNode.removeChild(this.parentNode);
    }
}
function getDetails() {
    var _a;
    const table = (_a = document.getElementById('bavil')) === null || _a === void 0 ? void 0 : _a.getElementsByTagName('tbody')[0];
    availbuses.map((ele) => {
        let row = table === null || table === void 0 ? void 0 : table.insertRow();
        let cell = row === null || row === void 0 ? void 0 : row.insertCell();
        let val = ele.id;
        let tnode = document.createTextNode(val.toString());
        cell === null || cell === void 0 ? void 0 : cell.appendChild(tnode);
        cell = row === null || row === void 0 ? void 0 : row.insertCell();
        let val2 = ele.name;
        tnode = document.createTextNode(val2);
        cell === null || cell === void 0 ? void 0 : cell.appendChild(tnode);
        cell = row === null || row === void 0 ? void 0 : row.insertCell();
        val2 = ele.source;
        tnode = document.createTextNode(val2);
        cell === null || cell === void 0 ? void 0 : cell.appendChild(tnode);
        cell = row === null || row === void 0 ? void 0 : row.insertCell();
        val2 = ele.destination;
        tnode = document.createTextNode(val2);
        cell === null || cell === void 0 ? void 0 : cell.appendChild(tnode);
        cell = row === null || row === void 0 ? void 0 : row.insertCell();
        val = ele.seats;
        tnode = document.createTextNode(val.toString());
        cell === null || cell === void 0 ? void 0 : cell.appendChild(tnode);
        cell = row === null || row === void 0 ? void 0 : row.insertCell();
        val = ele.price;
        tnode = document.createTextNode(val.toString());
        cell === null || cell === void 0 ? void 0 : cell.appendChild(tnode);
        cell = row === null || row === void 0 ? void 0 : row.insertCell();
        let button = document.createElement('button');
        button.setAttribute('class', 'btn');
        button.innerText = 'Delete';
        button.setAttribute('id', 'delete');
        button.addEventListener('click', () => {
            var _a;
            if (((_a = button.parentNode) === null || _a === void 0 ? void 0 : _a.parentNode) != null) {
                console.log(button.parentNode.parentNode);
                button.parentNode.parentNode.parentNode.removeChild(button.parentNode.parentNode);
            }
        });
        cell === null || cell === void 0 ? void 0 : cell.appendChild(button);
        cell = row === null || row === void 0 ? void 0 : row.insertCell();
        let button2 = document.createElement('button');
        button2.setAttribute('class', 'btn');
        button2.innerText = 'Edit';
        button2.setAttribute('id', 'edit');
        button2.addEventListener('click', () => {
            var _a;
            if (((_a = button.parentNode) === null || _a === void 0 ? void 0 : _a.parentNode) != null) {
                let bid = document.getElementById('bid');
                let tname = document.getElementById('tname');
                let boards = document.getElementById('boards');
                let stops = document.getElementById('stops');
                let savail = document.getElementById('savail');
                let cost = document.getElementById('cost');
                let childNodes = button.parentNode.parentNode.childNodes;
                bid.value = childNodes[0].textContent;
                tname.value = childNodes[1].textContent;
                boards.value = childNodes[2].textContent;
                stops.value = childNodes[3].textContent;
                savail.value = childNodes[4].textContent;
                cost.value = childNodes[5].textContent;
                button.parentNode.parentNode.parentNode.removeChild(button.parentNode.parentNode);
                let busform = document.getElementById("addbus");
                busform.style.display = "block";
            }
        });
        cell === null || cell === void 0 ? void 0 : cell.appendChild(button2);
    });
}
function searchForBus() {
    var _a;
    let source = document.getElementById('ssource');
    let destination = document.getElementById('sdestination');
    const table = (_a = document.getElementById('bavil')) === null || _a === void 0 ? void 0 : _a.getElementsByTagName('tbody')[0];
    while (table === null || table === void 0 ? void 0 : table.firstChild) {
        table.removeChild(table.firstChild);
    }
    let matching = [];
    if (source.value == "" && destination.value == "") {
        matching = availbuses;
    }
    else {
        if (source.value == "") {
            matching = availbuses.filter((item) => {
                if (item.destination == (destination === null || destination === void 0 ? void 0 : destination.value)) {
                    return item;
                }
            });
        }
        else {
            matching = availbuses.filter((item) => {
                if (item.source == (source === null || source === void 0 ? void 0 : source.value)) {
                    return item;
                }
            });
        }
    }
    if (source.value != "" && destination.value != "") {
        matching = availbuses.filter((item) => {
            if (item.source == (source === null || source === void 0 ? void 0 : source.value) && item.destination == (destination === null || destination === void 0 ? void 0 : destination.value)) {
                return item;
            }
        });
    }
    console.log(matching);
    matching.map((item) => {
        let row = table === null || table === void 0 ? void 0 : table.insertRow();
        for (let x in item) {
            let cell = row === null || row === void 0 ? void 0 : row.insertCell();
            let val = item[x];
            let tnode = document.createTextNode(val);
            cell === null || cell === void 0 ? void 0 : cell.appendChild(tnode);
        }
        let cell = row === null || row === void 0 ? void 0 : row.insertCell();
        let button = document.createElement('button');
        button.setAttribute('class', 'btn');
        button.innerText = 'Delete';
        button.setAttribute('id', 'delete');
        button.addEventListener('click', () => {
            var _a;
            if (((_a = button.parentNode) === null || _a === void 0 ? void 0 : _a.parentNode) != null) {
                console.log(button.parentNode.parentNode);
                button.parentNode.parentNode.parentNode.removeChild(button.parentNode.parentNode);
            }
        });
        cell === null || cell === void 0 ? void 0 : cell.appendChild(button);
        cell = row === null || row === void 0 ? void 0 : row.insertCell();
        let button2 = document.createElement('button');
        button2.setAttribute('class', 'btn');
        button2.innerText = 'Edit';
        button2.setAttribute('id', 'edit');
        button2.addEventListener('click', () => {
            var _a;
            if (((_a = button.parentNode) === null || _a === void 0 ? void 0 : _a.parentNode) != null) {
                let bid = document.getElementById('bid');
                let tname = document.getElementById('tname');
                let boards = document.getElementById('boards');
                let stops = document.getElementById('stops');
                let savail = document.getElementById('savail');
                let cost = document.getElementById('cost');
                let childNodes = button.parentNode.parentNode.childNodes;
                bid.value = childNodes[0].textContent;
                tname.value = childNodes[1].textContent;
                boards.value = childNodes[2].textContent;
                stops.value = childNodes[3].textContent;
                savail.value = childNodes[4].textContent;
                cost.value = childNodes[5].textContent;
                button.parentNode.parentNode.parentNode.removeChild(button.parentNode.parentNode);
                let busform = document.getElementById("addbus");
                busform.style.display = "block";
            }
        });
        cell === null || cell === void 0 ? void 0 : cell.appendChild(button2);
    });
}
