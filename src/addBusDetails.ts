interface bus {
    id: number,
    name: string,
    source: string,
    destination: string,
    seats: number,
    price: number,
}
let availbuses: bus[] = [
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
function addBus() {
    let bid = document.getElementById('bid') as HTMLInputElement;
    let tname = document.getElementById('tname') as HTMLInputElement;
    let boards = document.getElementById('boards') as HTMLInputElement;
    let stops = document.getElementById('stops') as HTMLInputElement;
    let savail = document.getElementById('savail') as HTMLInputElement;
    let cost = document.getElementById('cost') as HTMLInputElement;
    const table = document.getElementById('bavil')?.getElementsByTagName('tbody')[0];
    // let thead = document.getElementById('bavil')?.getElementsByTagName('thead')[0];
    let row = table?.insertRow();

    let cell = row?.insertCell();
    let val = bid.value;
    let tnode = document.createTextNode(val as string);
    cell?.appendChild(tnode);

    cell = row?.insertCell();
    val = tname.value;
    tnode = document.createTextNode(val as string);
    cell?.appendChild(tnode);

    cell = row?.insertCell();
    val = boards.value;
    tnode = document.createTextNode(val as string);
    cell?.appendChild(tnode);

    cell = row?.insertCell();
    val = stops.value;
    tnode = document.createTextNode(val as string);
    cell?.appendChild(tnode);


    cell = row?.insertCell();
    val = savail.value;
    tnode = document.createTextNode(val as string);
    cell?.appendChild(tnode);

    cell = row?.insertCell();
    val = cost.value;
    tnode = document.createTextNode(val as string);
    cell?.appendChild(tnode);

    cell = row?.insertCell();
    let button = document.createElement('button');
    button.setAttribute('class','btn');
    button.innerText = 'Delete';
    button.setAttribute('id','delete');
    button.addEventListener('click', () => {
        if(button.parentNode?.parentNode != null) {
            console.log(button.parentNode.parentNode.parentNode);
            button.parentNode.parentNode.parentNode!.removeChild(button.parentNode.parentNode);
        }
    })
    cell?.appendChild(button);
    cell = row?.insertCell();
    let button2 = document.createElement('button');
    button2.setAttribute('class','btn');
    button2.innerText = 'Edit';
    button2.setAttribute('id','edit');
    button2.addEventListener('click', () => {
        if(button.parentNode?.parentNode != null) {
            let bid = document.getElementById('bid') as HTMLInputElement;
                let tname = document.getElementById('tname') as HTMLInputElement;
                let boards = document.getElementById('boards') as HTMLInputElement;
                let stops = document.getElementById('stops') as HTMLInputElement;
                let savail = document.getElementById('savail') as HTMLInputElement;
                let cost = document.getElementById('cost') as HTMLInputElement;

                let childNodes = button.parentNode.parentNode.childNodes;
                // console.log(childNodes);
                // console.log(childNodes[0].textContent);
                bid.value = childNodes[0].textContent!;
                tname.value = childNodes[1].textContent!;
                boards.value = childNodes[2].textContent!;
                stops.value = childNodes[3].textContent!;
                savail.value = childNodes[4].textContent!;
                cost.value = childNodes[5].textContent!;

                button.parentNode.parentNode.parentNode!.removeChild(button.parentNode.parentNode);
                let busform = document.getElementById("addbus"); 
                busform!.style.display = "block";
        }
    })
    cell?.appendChild(button2);
    bid.value = "";
    tname.value = "";
    boards.value = "";
    stops.value = "";
    savail.value = "";
    cost.value = "";

}
function displayForm() {
    let busform = document.getElementById("addbus"); 
    busform!.style.display = "block";
}
function deleterow(this: any) {
    if(this.parentNode?.parentNode != null) {
        console.log(this);
        this.parentNode.parentNode.removeChild(this.parentNode);
    }
}
function getDetails() {
    const table = document.getElementById('bavil')?.getElementsByTagName('tbody')[0];
    availbuses.map((ele) => {
        let row = table?.insertRow();

        let cell = row?.insertCell();
        let val = ele.id;
        let tnode = document.createTextNode(val.toString());
        cell?.appendChild(tnode);

        cell = row?.insertCell();
        let val2 = ele.name;
        tnode = document.createTextNode(val2);
        cell?.appendChild(tnode);

        cell = row?.insertCell();
        val2 = ele.source;
        tnode = document.createTextNode(val2);
        cell?.appendChild(tnode);

        cell = row?.insertCell();
        val2 = ele.destination;
        tnode = document.createTextNode(val2);
        cell?.appendChild(tnode);

        cell = row?.insertCell();
        val = ele.seats;
        tnode = document.createTextNode(val.toString());
        cell?.appendChild(tnode);

        cell = row?.insertCell();
        val = ele.price;
        tnode = document.createTextNode(val.toString());
        cell?.appendChild(tnode);

        cell = row?.insertCell();
        let button = document.createElement('button');
        button.setAttribute('class','btn');
        button.innerText = 'Delete';
        button.setAttribute('id','delete');
        button.addEventListener('click', () => {
            if(button.parentNode?.parentNode != null) {
                console.log(button.parentNode.parentNode);
                button.parentNode.parentNode.parentNode!.removeChild(button.parentNode.parentNode);
            }
        })
        cell?.appendChild(button);

        cell = row?.insertCell();
        let button2 = document.createElement('button');
        button2.setAttribute('class','btn');
        button2.innerText = 'Edit';
        button2.setAttribute('id','edit');
        button2.addEventListener('click', () => {
            if(button.parentNode?.parentNode != null) {
                let bid = document.getElementById('bid') as HTMLInputElement;
                let tname = document.getElementById('tname') as HTMLInputElement;
                let boards = document.getElementById('boards') as HTMLInputElement;
                let stops = document.getElementById('stops') as HTMLInputElement;
                let savail = document.getElementById('savail') as HTMLInputElement;
                let cost = document.getElementById('cost') as HTMLInputElement;

                let childNodes = button.parentNode.parentNode.childNodes;
                // console.log(childNodes);
                // console.log(childNodes[0].textContent);
                bid.value = childNodes[0].textContent!;
                tname.value = childNodes[1].textContent!;
                boards.value = childNodes[2].textContent!;
                stops.value = childNodes[3].textContent!;
                savail.value = childNodes[4].textContent!;
                cost.value = childNodes[5].textContent!;

                button.parentNode.parentNode.parentNode!.removeChild(button.parentNode.parentNode);
                let busform = document.getElementById("addbus"); 
                busform!.style.display = "block";
            }
        })
        cell?.appendChild(button2);
    })
}

function searchForBus() {
    let source = document.getElementById('ssource') as HTMLInputElement;
    let destination = document.getElementById('sdestination') as HTMLInputElement;
    const table = document.getElementById('bavil')?.getElementsByTagName('tbody')[0];
    while(table?.firstChild) {
        table.removeChild(table.firstChild);
    }
    let matching = [];
    if(source.value == "" && destination.value == "") {
        matching = availbuses;
    }else {
        if(source.value == "") {
            matching = availbuses.filter((item: bus): bus | void => {
                if(item.destination == destination?.value) {
                    return item;
                }
            });
        }else {
            matching = availbuses.filter((item: bus): bus | void => {
                if(item.source == source?.value) {
                    return item;
                }
            });
        }
    }if(source.value != "" && destination.value != ""){
    matching = availbuses.filter((item: bus): bus | void => {
        if(item.source == source?.value && item.destination == destination?.value) {
            return item;
        }
    });
}
    console.log(matching);
   matching.map((item) => {
    let row = table?.insertRow();
    for(let x in item) {
        let cell = row?.insertCell();
        let val = item[(x as any) as keyof bus]
        let tnode: Text = document.createTextNode(val as string);
        cell?.appendChild(tnode);
    }
    let cell = row?.insertCell();
    let button = document.createElement('button');
    button.setAttribute('class','btn');
    button.innerText = 'Delete';
    button.setAttribute('id','delete');
    button.addEventListener('click', () => {
        if(button.parentNode?.parentNode != null) {
            console.log(button.parentNode.parentNode);
            button.parentNode.parentNode.parentNode!.removeChild(button.parentNode.parentNode);
        }
    })
    cell?.appendChild(button);

    cell = row?.insertCell();
    let button2 = document.createElement('button');
    button2.setAttribute('class','btn');
    button2.innerText = 'Edit';
    button2.setAttribute('id','edit');
    button2.addEventListener('click', () => {
        if(button.parentNode?.parentNode != null) {
            let bid = document.getElementById('bid') as HTMLInputElement;
            let tname = document.getElementById('tname') as HTMLInputElement;
            let boards = document.getElementById('boards') as HTMLInputElement;
            let stops = document.getElementById('stops') as HTMLInputElement;
            let savail = document.getElementById('savail') as HTMLInputElement;
            let cost = document.getElementById('cost') as HTMLInputElement;

            let childNodes = button.parentNode.parentNode.childNodes;
            // console.log(childNodes);
            // console.log(childNodes[0].textContent);
            bid.value = childNodes[0].textContent!;
            tname.value = childNodes[1].textContent!;
            boards.value = childNodes[2].textContent!;
            stops.value = childNodes[3].textContent!;
            savail.value = childNodes[4].textContent!;
            cost.value = childNodes[5].textContent!;

            button.parentNode.parentNode.parentNode!.removeChild(button.parentNode.parentNode);
            let busform = document.getElementById("addbus"); 
            busform!.style.display = "block";
        }
    })
    cell?.appendChild(button2);
   });

}
