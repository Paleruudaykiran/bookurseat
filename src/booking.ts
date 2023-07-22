function initialize(){
    let myobj = localStorage.getItem('selectedbus');
    let selectedbus = JSON.parse(myobj!);
    console.log(selectedbus);
    let tid = document.getElementById('tid');
    let tname = document.getElementById('tname');
    let boards = document.getElementById('boards');
    let stops = document.getElementById('stops');
    let cost = document.getElementById('cost');
    let seats = document.getElementById('seats')

    // setting values form the object 
    tid!.innerText = selectedbus.id;
    tname!.innerText = selectedbus.name;
    boards!.innerText = selectedbus.source;
    stops!.innerText = selectedbus.destination;
    cost!.innerText = selectedbus.price;
    seats!.innerText = selectedbus.seats;

    let allseats = document.getElementsByClassName('seat'); 
    // console.log('allseats' + allseats);
    // console.log(allseats[0]);
    // allseats[0].addEventListener('click', function(this: any) {
    //     console.log(this)
    //     this.style.backgroundColor = 'green';
    // })
    for(let i=0;i<allseats.length;i++) {
        let seat = allseats[i];
        seat.addEventListener('click',function(this: any) {
            this.style.backgroundColor = 'green';
            if(this.hasAttribute('seat-id')) {
                this.style.backgroundColor = 'inherit';
                this.removeAttribute('seat-id');
            }else {
                this.setAttribute('seat-id',this.innerText);
            }
           updatePrice();
    })
}
}
function updatePrice() {
    let seatnos = [];
    let count = 0;
    let allseats = document.getElementsByClassName('seat');
    for(let j=0;j<allseats.length;j++) {
        let curr = allseats[j] as HTMLElement;
        // console.log(curr);
        if(curr.hasAttribute('seat-id')){
            seatnos.push(curr.innerText);
            count++;
        }
    }
    let dseats = document.getElementById('seatsYouSelected');
    let pseats = document.getElementById('priceForYourSelection');
    let myobj = localStorage.getItem('selectedbus');
    let obj = JSON.parse(myobj!);
    count = count*obj.price;
    dseats!.innerText = "";
    dseats!.innerText = seatnos.toString();
    pseats!.innerText = count as unknown as string;
    localStorage.setItem('seatslist',JSON.stringify(seatnos));
    localStorage.setItem('totalprice',count.toString());
}
function addDetails() {
    let cname = document.getElementById('cname') as HTMLInputElement;
    let email = document.getElementById('email') as HTMLInputElement;
    let mno = document.getElementById('mno') as HTMLInputElement;
    localStorage.setItem('cname',cname.value);
    localStorage.setItem('email',email.value);
    localStorage.setItem('mno',mno.value);

    window.location.href = 'confirm.html';
}