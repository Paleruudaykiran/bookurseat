interface bus {
    id: number,
    name: string,
    source: string,
    destination: string,
    seats: number,
    price: number,
}
let buses: bus[] = [
    {
        id: 101,
        name: 'morning star',
        source: 'parchur',
        destination: 'bangalore',
        seats : 28,
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
        source : 'bangalore',
        destination: 'cpt',
        seats : 28,
        price : 1300,
    }
]
function getSchedule() {
    const source = document.getElementById('start') as HTMLInputElement;
    const destination = document.getElementById('end') as HTMLInputElement;
    const table = document.getElementById('bavil')?.getElementsByTagName('tbody')[0];
    let thead = document.getElementById('bavil')?.getElementsByTagName('thead')[0];
    if(typeof thead !== 'undefined' && typeof thead !== null)
        thead.style.visibility = 'visible';
    let Available = buses.filter((item: bus): bus | void => {
        if(item.source == source?.value && item.destination == destination?.value) {
            return item;
        }
    })
    Available.map((item) => {
        let row = table?.insertRow();
        for(let x in item) {
            if(item.hasOwnProperty(x)) {
            let cell = row?.insertCell();
            let val = item[(x as any) as keyof bus]
            let tnode: Text = document.createTextNode(val as string);
            cell?.appendChild(tnode);
            }
        }
        let cell = row?.insertCell();
        let button = document.createElement('button');
        button.setAttribute('class','btn');
        let tid = item.id;
        button.setAttribute('tid',tid.toString());
        button.innerText = 'Book';
        cell?.appendChild(button);
        button.addEventListener('click',function() {
            let tid = this.getAttribute('tid')! as unknown as number;
            console.log(tid);
            for(let i=0;i<buses.length;i++) {
                if(buses[i].id == tid) {
                    window.localStorage.setItem('selectedbus',JSON.stringify(buses[i]));
                    window.location.href = 'booking.html';
                }
            }
        })
    })
    if(typeof table !== 'undefined' && typeof table !== null)
        table.style.visibility = 'visible';
}
