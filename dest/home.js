"use strict";
let buses = [
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
function getSchedule() {
    var _a, _b;
    const source = document.getElementById('start');
    const destination = document.getElementById('end');
    const table = (_a = document.getElementById('bavil')) === null || _a === void 0 ? void 0 : _a.getElementsByTagName('tbody')[0];
    let thead = (_b = document.getElementById('bavil')) === null || _b === void 0 ? void 0 : _b.getElementsByTagName('thead')[0];
    if (typeof thead !== 'undefined' && typeof thead !== null)
        thead.style.visibility = 'visible';
    let Available = buses.filter((item) => {
        if (item.source == (source === null || source === void 0 ? void 0 : source.value) && item.destination == (destination === null || destination === void 0 ? void 0 : destination.value)) {
            return item;
        }
    });
    Available.map((item) => {
        let row = table === null || table === void 0 ? void 0 : table.insertRow();
        for (let x in item) {
            if (item.hasOwnProperty(x)) {
                let cell = row === null || row === void 0 ? void 0 : row.insertCell();
                let val = item[x];
                let tnode = document.createTextNode(val);
                cell === null || cell === void 0 ? void 0 : cell.appendChild(tnode);
            }
        }
        let cell = row === null || row === void 0 ? void 0 : row.insertCell();
        let button = document.createElement('button');
        button.setAttribute('class', 'btn');
        let tid = item.id;
        button.setAttribute('tid', tid.toString());
        button.innerText = 'Book';
        cell === null || cell === void 0 ? void 0 : cell.appendChild(button);
        button.addEventListener('click', function () {
            let tid = this.getAttribute('tid');
            console.log(tid);
            for (let i = 0; i < buses.length; i++) {
                if (buses[i].id == tid) {
                    window.localStorage.setItem('selectedbus', JSON.stringify(buses[i]));
                    window.location.href = 'booking.html';
                }
            }
        });
    });
    if (typeof table !== 'undefined' && typeof table !== null)
        table.style.visibility = 'visible';
}
