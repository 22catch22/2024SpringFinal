import {Link} from "react-router-dom"
import { useState } from 'react'; 
 import axios from 'axios';
import {toast} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Loginform()
{
 const navigate = useNavigate();
  const [data, setData] = useState({
 
    email:'',
    password:'',
  })

const loginUser = async (e) =>
{
e.preventDefault()
const {email, password} = data

try
{ 
const {data} = await axios.post('/loginuserProfile', 
{  
    email, 
password
});

if(data.error)
{toast.error(data.error)}
else{
setData({});
navigate("timer")

}
}
catch(error){console.log(error)}
}
 return(
<>
<div id = "loginform"> 
<form onSubmit={loginUser}>
<label for = "username">Username</label>
<p><input type = "Text" name = "usename" value ={data.username} onChange={(e) => setData({...data, username: e.target.value })}required></input></p>
<label for = "email">Email</label>
<p><input type = "Text" name = "email" value = {data.email} onChange={(e) => setData({...data, email: e.target.value })}required></input></p>
<label for = "username">password</label>
<p><input type = "Text" name = "username" value = {data.password} onChange={(e) => setData({...data, password: e.target.value })}required></input></p>




   <p><button type = "submit">Login</button></p>
  <Link to ="/CreateProfile"><button id = "profilebutton">Create Profile</button></Link> 
    <Link to = "/Pomopage"><button id = "pomobutton">What's a Pomodoro?</button></Link> 
 </form>
 
 </div>
</>
 )
 }
 export default Loginform