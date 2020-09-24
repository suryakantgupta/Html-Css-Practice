
// This function verifies if the input is alphabet or not 
/* 
@description: The use of this function is to validate if
the input string is alphabet if not this will give a popup message

@param{*} It gets the element by Id 

@returns the message to enter the valid details

*/
$(document).ready(function () {

    $('#fname,#formsubmit').on('blur submit', (function (e) {
        let letter = /^[A-Za-z]+$/;
        let str = $('#fname').val()
        if (str.length == 0) {
            $('#fname').css('border', '2px solid red')
            $('#fnamealert').text("Input cannot be Empty")
            //alert("Input cannot be Empty")
        } else {
            if (str.match(letter)) {
                $('#fname').css('border', '2px solid green')
                $('#fnamealert').text(" ")
            } else {
                $('#fname').css('border', '2px solid red')
                $('#fnamealert').text("Please use only Alphabets")
                // alert("Please use only Alphabets")
            }
        }
        e.preventDefault()
    }))

    $('#lname,#formsubmit').on('blur submit', (function (e) {
        let letter = /^[A-Za-z]+$/;
        let str = $('#lname').val()
        if (str.length == 0) {
            $('#lname').css('border', '2px solid red')
            $('#lnamealert').text("Input cannot be Empty")
            //alert("Input cannot be Empty")
        } else {
            if (str.match(letter)) {
                $('#lname').css('border', '2px solid green')
                $('#lnamealert').text(" ")
            } else {
                $('#lname').css('border', '2px solid red')
                $('#lnamealert').text("Please use only Alphabets")
                // alert("Please use only Alphabets")
            }
        }
        e.preventDefault()
    }))

    // This function verifies if the input is number or not and length between 8 to 12 and text should be alphanumeric

    /*
    @description: This function checks if the input is of 10 digits
    and all the inputs are number
    
    @param{*}: This function uses id of the element to read
    the inputs
    
    @returns It will return the text msg if input is not valid
    */
    $('#phonenumber,#formsubmit').on('blur submit', (function (e) {
        let letter = /^[0-9]+$/;
        let str = $('#phonenumber').val()
        if (str[0] == 7 || str[0] == 8 || str[0] == 9) {
            if (str.length < 10 || str.length > 10) {
                $('#phonenumber').css('border', '2px solid red')
                $('#pnumalert').text("Mobile nuber has to be of 10 digits")
                // alert("Mobile nuber has to be of 10 digits")
            } else {
                if (str.match(letter)) {
                    $('#phonenumber').css('border', '2px solid green')
                    $('#pnumalert').text(" ")
                } else {
                    $('#phonenumber').css('border', '2px solid red')
                    $('#pnumalert').text("Please enter only numbers")
                    // alert("Please enter only numbers")
                }
            }
        } else {
            $('#phonenumber').css('border', '2px solid red')
            $('#pnumalert').text("please enter a valid number")
            // alert("please enter a valid number")
        }
        e.preventDefault()
    }))

    //This function verifies if the input is number


    /*
    @description: This function checks if the input is of 10 digits
    and all the inputs are number
    
    @param{*}: This function uses id of the element to read
    the inputs
    
    @returns It will return the text msg if input is not valid
    */
    $('#officenumber,#formsubmit').on('blur submit', (function () {
        let letter = /^[0-9]+$/;
        let str = $('#officenumber').val()
        if (str.match(letter)) {
            $('#officenumber').css('border', '2px solid green')
            $('#onumalert').text(" ")
        } else {
            $('#officenumber').css('border', '2px solid red')
            $('#onumalert').text("please enter only numbers")
            // alert("Please enter only numbers")
        }
    }))

    //This function verifies the format of email
    /*
    @description: This function checks if the input is in
    valid mail format
    
    @param{*}: This function uses id of the element to read
    the inputs
    
    @returns It will return the text msg if input is not valid
    */
    $('#emailfield,#formsubmit').on('blur submit', (function () {
        let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        let str = $('#emailfield').val()
        if (pattern.test(str)) {
            $('#emailfield').css('border', '2px solid green')
            $('#emailalert').text(" ")
        } else {
            $('#emailfield').css('border', '2px solid red')
            $('#emailalert').text("Please enter a valid mail")
            // alert("Please enter a valid mail")
        }
    }))

    //Password Validation function
    /*
@description: This function checks if the input is in
valid password format
 
@param{*}: This function uses id of the element to read
the inputs
 
@returns It will return the text msg if input is not valid
*/
    $('#pass,#formsubmit').on('blur submit', (function () {
        let a = $('#pass').val()
        if (a.length < 8 || a.length > 12) {
            $('#pass').css('border', '2px solid red')
            $('#passwordalert').text("Password should be between 8-12 characters and only contain alphanumeric characters")
            // alert("Password should be between 8-12 characters")
        } else {
            let alphanumeric = "^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$";
            if (a.match(alphanumeric)) {
                $('#pass').css('border', '2px solid green')
                $('#passwordalert').text(" ")
                document.getElementById('confirmpass').disabled = false;
            } else {
                $('#passwordalert').text("Password should be between 8-12 characters and only contain alphanumeric characters")
            }
        }
    }))

    //This function confirms that password is same entered in both area
/*
@description: It will check if the parameters are same as password

@param: Should be same as password

@return: It the param doesnt match with password it will give the error msg
*/
    $('#confirmpass,#formsubmit').on('blur submit', (function () {
        let a = $('#pass').val()
        let b = $('#confirmpass').val()
        if (a == b && a.length>0) {
            $('#pass').css('border', '2px solid green')
            $('#confirmpass').css('border', '2px solid green')
            $('#conpassalert').text(" ")
        } else {
            $('#pass').css('border', '2px solid red')
            $('#confirmpass').css('border', '2px solid red')
            $('#conpassalert').text("Password doesn't match")
            // alert("Password doesn't match")
        }
    }))

    //This function gets the list of year
        /*
    @description: This function gives the list of the year 
    in the Dob section
    
    @param{*}: This function uses id of the select element and appends
    options to it
    
    @returns It will return the list of option to the select element on focus
    */
    $('#year,#formsubmit').on('focus submit', (function () {
        let start = 1980;
        let end = new Date().getFullYear();
        let option = "<option value=volvo>Year</option>"
        for (let year = start; year <= end; year++) {
            option += `<option value=${year}>` + year + `</option>`;
        }
        //console.log(option)
        document.getElementById('year').innerHTML = option;
    }))

    //This function gets the age of the user
            /*
    @description: This function calculates the age of user
    from the given DOB
    
    @param{*}: This function uses id of the element to get the input
    and to calculate the age a formula is implemented in it
    
    @returns It will return the age of the user on blur event
    */
    $('#year,#formsubmit').on('blur submit', (function () {
        let day = $('#day').val();
        let temp = $('#month').val();
        let year = $('#year').val();
        switch (temp) {
            case 'jan': month = 1; break;
            case 'feb': month = 2; break;
            case 'march': month = 3; break;
            case 'april': month = 4; break;
            case 'may': month = 5; break;
            case 'june': month = 6; break;
            case 'july': month = 7; break;
            case 'aug': month = 8; break;
            case 'sep': month = 9; break;
            case 'oct': month = 10; break;
            case 'nov': month = 11; break;
            case 'dec': month = 12; break;
        }
        let startmonth = new Date(year, month)
        if (year == 'volvo') {
            $("#yearalert").text("Required")
        } else {
            let todaysdate = new Date()
            let currentmonth = todaysdate.getMonth() + 1;
            let currentyear = todaysdate.getFullYear();

            let totalMonths = (currentmonth - month) + (12 * (currentyear - year));
            document.getElementById('age').placeholder = (totalMonths / 12).toFixed(1)
            $("#yearalert").text(" ")
        }
    }))

    //This function checks if radio button is seleted or not
          /*
    @description: This function check if atleast one
     option is selected or not 
    
    @param{*}: User can only select one option from the given 
    two male and female
    
    @returns It will return the error msg if no option is selected
    */
    $('.radio,#formsubmit').on('click submit', (function () {
        if (document.getElementById('residence1').checked || document.getElementById('residence2').checked) {
            $('#labelgender').css('color','gray')
        } else {
            $('#labelgender').css('color','red')
            // $('#radiorequired').text("This field is required")
        }
    }))


    // This function checks if atleast 1 check box is selected

    /*
    @description: This function check if atleast one
     option is selected or not 
    
    @param{*}: User can only select n number of option
    from the given checkbox
    
    @returns It will return the error msg if no option is selected
    */
    $('.checkbox,#formsubmit').on('click submit', (function () {
        if (document.getElementById('checkbox_sample18').checked || document.getElementById('checkbox_sample19').checked || document.getElementById('checkbox_sample20').checked) {
            $('#labelint').css('color','gray')
            // $('#checkboxrequired').empty()
        } else {
            $('#labelint').css('color','red')
            // $('#checkboxrequired').text("This field is required  (Atleast 1)")
        }
    }))

    //This function checks if textarea is filled or empty

    /*
    @description: This function check if txtarea is empty
    or not 
    
    @param{*}: User has to give some input it
    and as first leter is typed the error msg is gone
    
    @returns It will return the error msg if txtarea is empty
    */
    $('#txtarea,#formsubmit').on('input submit', function () {
        var content = $("#txtarea").val();
        if (content.length > 0) {
            $('#labelabout').css('color','gray')
            // $('#textboxrequired').empty()
        } else {
            $('#labelabout').css('color','red')
            // $('#textboxrequired').text("This field is required  (Atleast 1)")
        }
    })
})