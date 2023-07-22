function loadDetails() {
    let myobj = localStorage.getItem('selectedbus');
    let selectedbus = JSON.parse(myobj!);
    console.log(selectedbus);
    let tid = document.getElementById('tid');
    let tname = document.getElementById('tname');
    let boards = document.getElementById('boards');
    let stops = document.getElementById('stops');
    let pnr = document.getElementById('pnr');
    pnr!.innerText = Math.floor(Math.random() * 10001).toString();

    // setting values form the object 
    tid!.innerText = selectedbus.id;
    tname!.innerText = selectedbus.name;
    boards!.innerText = selectedbus.source;
    stops!.innerText = selectedbus.destination;

    let seatslist = JSON.parse(localStorage.getItem('seatslist')!);
    console.log(seatslist);
    let totalprice = localStorage.getItem('totalprice');
    console.log(totalprice);
    let tprice = document.getElementById('tprice');
    tprice!.innerText = totalprice!;

    let yseats = document.getElementById('yseats');
    yseats!.innerText = seatslist!;

    let mno = document.getElementById('mno');
    let cname = document.getElementById('cname');
    let email = document.getElementById('email');

    mno!.innerText = localStorage.getItem('mno')!;
    cname!.innerText = localStorage.getItem('cname')!;
    email!.innerText = localStorage.getItem('email')!;


}

function print() {
    window.print();
}