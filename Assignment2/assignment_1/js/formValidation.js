
// This function verifies if the input is alphabet or not 
function bluralphaFunction(id) {
    let letter = /^[A-Za-z]+$/;
    let str = document.getElementById(id).value
    if(str.length == 0){
        document.getElementById(id).style.border = '2px solid red'
        alert("Input cannot be Empty")
    }else{
    if (str.match(letter)) {
        document.getElementById(id).style.border = '2px solid green'
    } else {
        document.getElementById(id).style.border = '2px solid red'
        alert("Please use only Alphabets")
    }
}
}

// This function verifies if the input is number or not
function blurmobnumFunction(id) {
    let letter = /^[0-9]+$/;
    let str = document.getElementById(id).value
    if(str.length < 10 || str.length>10){
        document.getElementById(id).style.border = '2px solid red'
        alert("Mobile nuber has to be of 10 digits")
    }else{
    if (str.match(letter)) {
        document.getElementById(id).style.border = '2px solid green'
    } else {
        document.getElementById(id).style.border = '2px solid red'
        alert("Please enter only numbers")
    }
}
}


function blurofficenumFunction(id) {
    let letter = /^[0-9]+$/;
    let str = document.getElementById(id).value
    if (str.match(letter)) {
        document.getElementById(id).style.border = '2px solid green'
    } else {
        document.getElementById(id).style.border = '2px solid red'
        alert("Please enter only numbers")
    }
}

//This function verifies the format of email
function bluremailFunction(id){
let pattern=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

let str=document.getElementById(id).value
if(pattern.test(str)){
    document.getElementById(id).style.border = '2px solid green'
}else{
    document.getElementById(id).style.border = '2px solid red'
    alert("Please enter a valid mail")
}
}

//Password Validation function 
function blurpassFunction() {
    let a = document.getElementById('pass').value
    if(a.length<8 || a.length>12){
        document.getElementById('pass').style.border = '2px solid red'
        alert("Password should be between 8-12 characters")
    }else{
        let alphanumeric = /^[A-Za-z0-9]+$/;
        if(a.test(alphanumeric)){
            document.getElementById('pass').style.border = '2px solid green'
        }else{
            alert("Password should only contain alphanumeric characters")
        }
    }
}


function blurconfirmpassFunction() {
    let a = document.getElementById('pass').value
    let b = document.getElementById('confirmpass').value
    if (a == b) {
        document.getElementById('pass').style.border = '2px solid green'
        document.getElementById('confirmpass').style.border = '2px solid green'
    } else {
        document.getElementById('pass').style.border = '2px solid red'
        document.getElementById('confirmpass').style.border = '2px solid red'
        alert("Password doesn't match")
    }

}


function getYearList(){
    let start = 1980;
    let end = new Date().getFullYear();
    let option;
    for(let year=start;year<=end;year++){
        option += `<option value=${year}>` +year+`</option>`;
    }
    //console.log(option)
    document.getElementById('year').innerHTML = option;
}