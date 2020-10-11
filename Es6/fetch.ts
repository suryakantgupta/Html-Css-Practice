import axios from 'axios'

const url= "https://reqres.in/api/users?page=2"

axios.get(url).then((result)=>{
    console.log(result.data)
})