
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

// This function verifies if the input is number or not and length between 8 to 12 and text should be alphanumeric
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

//This function verifies if the input is number
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
        document.getElementById('passwordpara').innerHTML = "Password should be between 8-12 characters and only contain alphanumeric characters"
        // alert("Password should be between 8-12 characters")
    }else{
        let alphanumeric = "^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$";
        if(a.match(alphanumeric)){
            document.getElementById('pass').style.border = '2px solid green'
            document.getElementById('passwordpara').innerHTML = ""
        }else{
            document.getElementById('passwordpara').innerHTML = "Password should be between 8-12 characters and only contain alphanumeric characters"
        }
    }
}

//This function confirms that password is same entered in both area
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

//This function gets the list of year
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

//This function gets the age of the user
function getAge(){
    let day = document.getElementById('day').value;
    let temp = document.getElementById('month').value;
    let year = document.getElementById('year').value;
    switch(temp){
        case 'jan':month=1;break;
        case 'feb':month=2;break;
        case 'march':month=3;break;
        case 'april':month=4;break;
        case 'may':month=5;break;
        case 'june':month=6;break;
        case 'july':month=7;break;
        case 'aug':month=8;break;
        case 'sep':month=9;break;
        case 'oct':month=10;break; 
        case 'nov':month=11;break;
        case 'dec':month=12;break;
    }
     //let startmonth =new Date(year,month)
    let todaysdate = new Date()
    let currentmonth = todaysdate.getMonth()+1;
    let currentyear = todaysdate.getFullYear();
    
    let totalMonths = (currentmonth-month) +(12*(currentyear-year));
    document.getElementById('age').placeholder = (totalMonths/12).toFixed(1)
}

function radioFunction(){
    if (document.getElementById('residence1').checked || document.getElementById('residence1'))
  {
    document.getElementById('radiorequired').innerHTML = ""
  }else{
    document.getElementById('radiorequired').innerHTML = "This field is required"
  }
}

function checkboxFunction(){
    if (document.getElementById('checkbox_sample18').checked || document.getElementById('checkbox_sample19').checked || document.getElementById('checkbox_sample20').checked) 
  {
    document.getElementById('checkboxrequired').innerHTML = ""
  }else{
    document.getElementById('checkboxrequired').innerHTML = "This field is required (Atleast 1)"
  }
}


function textArea(){
	var content = document.getElementById("txtarea").value;
    if(content.length>0){
        document.getElementById('textboxrequired').innerHTML = "";
    }else{
        document.getElementById('textboxrequired').innerHTML = "This field is required";
    }

}