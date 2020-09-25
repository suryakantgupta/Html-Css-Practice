const $ = require('jquery')

console.log(1)
$.get('https://reqres.in/api/users?page=2',function(data){
    console.log(data)
})
console.log(3)