import { useState } from "react"
import axios from 'axios';
import {toast} from 'react-hot-toast'
import { useNavigate } from "react-router-dom";
function CreateUserProfile()

{
const navigate = useNavigate()
const [finaluserData, setFinalUserData] = useState({
Username:"",
email:"",
password:"",

})
const CreatenewProfile = async(e) => 
{e.preventDefault();
const {Username, email, password} = finaluserData
try {
const{data} = await axios.post('/CreateProfile',
{Username, email, password})
 if (data.error){
toast.error(data.error)
}
else
{setFinalUserData({})
toast.success('Profile Created :)!')
navigate('/')
}
}
catch(error){
console.log(error);
}
}

return(
 <div id = "newprofilebox">
<img src = "./assets/Tomato.png" alt = "It's a Tomato" id = "tomatopic"></img>
<form onSubmit={CreatenewProfile}>
<label for = "username">Username</label>
<p><input type = "Text" name = "Username" placeholder="please enter a username" value = {finaluserData.Username} onChange={(e)=> setFinalUserData({...finaluserData, Username:e.target.value})}required></input></p>
<label for = "email">Email</label>
<p><input type = "email" name = "email"  placeholder="please enter an email address" value ={finaluserData.email} onChange={(e)=> setFinalUserData({...finaluserData, email:e.target.value})}required></input></p>
<label for = "username">password</label>
<p><input type = "Text"  placeholder="please enter a password" value = {finaluserData.password} onChange={(e)=> setFinalUserData({...finaluserData, password:e.target.value})}required></input></p>
<button type = "submit">Create Profile</button>
 
</form>
</div>
 )

}

 export default CreateUserProfile