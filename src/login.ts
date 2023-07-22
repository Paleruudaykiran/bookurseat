function showpass() {
    let input = document.getElementsByName("pass")[0];
    let text = input.getAttribute("type");
    if(text == "password") {
        input.setAttribute('type', "text");
    }
    else {
        input.setAttribute('type',"password");
    }
}
function validate() {
    let uname = document.getElementById('uname') as HTMLInputElement;
    let pass = document.getElementById('pass') as HTMLInputElement; 
    let p = document.getElementById('error')!; 
    if(uname.value === 'uday' && pass.value == '123') {
        p.innerText = 'successfully signed In';
        window.location.href = 'adminpage.html';
    }else {
        if(uname.value=='uday' && pass.value == '1234') {
            window.location.href = 'home.html';
        } else {
            p.innerText = 'please check your credentials';
        }
    }
   
}