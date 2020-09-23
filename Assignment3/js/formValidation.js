
// This function verifies if the input is alphabet or not 
$(document).ready(function(){    
$('#fname').blur(function(){
    let letter = /^[A-Za-z]+$/;
    let str = $('#fname').val()
    if(str.length == 0){
        $('#fname').css('border','2px solid red') 
        alert("Input cannot be Empty")
    }else{
    if (str.match(letter)) {
        $('#fname').css('border','2px solid green')
    } else {
        $('#fname').css('border','2px solid red')
        alert("Please use only Alphabets")
    }
}
})

$('#lname').blur(function(){
    let letter = /^[A-Za-z]+$/;
    let str = $('#lname').val()
    if(str.length == 0){
        $('#lname').css('border','2px solid red') 
        alert("Input cannot be Empty")
    }else{
    if (str.match(letter)) {
        $('#lname').css('border','2px solid green')
    } else {
        $('#lname').css('border','2px solid red')
        alert("Please use only Alphabets")
    }
}
})

// This function verifies if the input is number or not and length between 8 to 12 and text should be alphanumeric
$('#phonenumber').blur(function(){
    let letter = /^[0-9]+$/;
    let str = $('#phonenumber').val()
    if(str[0]==7 || str[0]==8 || str[0]==9){
    if(str.length < 10 || str.length>10){
        $('#phonenumber').css('border','2px solid red')
        alert("Mobile nuber has to be of 10 digits")
    }else{
    if (str.match(letter)) {
        $('#phonenumber').css('border','2px solid green')
    } else {
        $('#phonenumber').css('border','2px solid red')
        alert("Please enter only numbers")
    }
}
    }else{
        $('#phonenumber').css('border','2px solid red')
        alert("please enter a valid number")
    }
})

//This function verifies if the input is number
$('#officenumber').blur(function(){
    let letter = /^[0-9]+$/;
    let str = $('#officenumber').val()
    if (str.match(letter)) {
        $('#officenumber').css('border','2px solid green')
    } else {
        $('#officenumber').css('border','2px solid red')
        alert("Please enter only numbers")
    }
})

//This function verifies the format of email
$('#emailfield').blur(function(){
let pattern=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

let str=$('#emailfield').val()
if(pattern.test(str)){
    $('#emailfield').css('border','2px solid green')
}else{
    $('#emailfield').css('border','2px solid red')
    alert("Please enter a valid mail")
}
})

//Password Validation function 
$('#pass').blur(function(){
    let a = $('#pass').val()
    if(a.length<8 || a.length>12){
        $('#pass').css('border','2px solid red')
        $('#passwordpara').text("Password should be between 8-12 characters and only contain alphanumeric characters")
        // alert("Password should be between 8-12 characters")
    }else{
        let alphanumeric = "^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$";
        if(a.match(alphanumeric)){
            $('#pass').css('border','2px solid green')
            $('#passwordpara').remove()
        }else{
            $('#passwordpara').text("Password should be between 8-12 characters and only contain alphanumeric characters")
        }
    }
})

//This function confirms that password is same entered in both area
$('#confirmpass').blur(function(){
    let a = $('#pass').val()
    let b = $('#confirmpass').val()
    if (a == b) {
        $('#pass').css('border','2px solid green')
        $('#confirmpass').css('border','2px solid green')
    } else {
        $('#pass').css('border','2px solid red')
        $('#confirmpass').css('border','2px solid red')
        alert("Password doesn't match")
    }
})

//This function gets the list of year
$('#year').focus(function(){
    let start = 1980;
    let end = new Date().getFullYear();
    let option;
    for(let year=start;year<=end;year++){
        option += `<option value=${year}>` +year+`</option>`;
    }
    //console.log(option)
    document.getElementById('year').innerHTML = option;
})

//This function gets the age of the user
$('#year').blur(function getAge(){
    let day = $('#day').val();
    let temp = $('#month').val();
    let year = $('#year').val();
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
})

//This function checks if radio button is seleted or not
$('.radio').click(function(){
    if (document.getElementById('residence1').checked || document.getElementById('residence1'))
  {
    $('#radiorequired').empty()
  }else{
    $('#radiorequired').text("This field is required")
  }
})
// This function checks if atleast 1 check box is selected
$('.checkbox').click(function(){
    if (document.getElementById('checkbox_sample18').checked || document.getElementById('checkbox_sample19').checked || document.getElementById('checkbox_sample20').checked) 
  {
    $('#checkboxrequired').empty()
  }else{
    $('#checkboxrequired').text("This field is required  (Atleast 1)")
  }
})

//This function checks if textarea is filled or empty
$('#txtarea').on('input',function(){
	var content = $("#txtarea").val();
    if(content.length>0){
        $('#textboxrequired').empty()
    }else{
        $('#textboxrequired').text("This field is required  (Atleast 1)")
    }
})

})