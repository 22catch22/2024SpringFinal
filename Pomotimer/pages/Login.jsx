import {Link} from 'react-router-dom'
import LoginForm from '../components/LoginForm'
 
function Loginpage(){
return(
<>
<div id = "loginbox">
<img src = "./assets/Tomato.png" alt = "It's a Tomato" id = "tomatopic"></img>
<h1>Welcome to the PomoTimer!</h1>
<p>Please enter login credentials!</p>
<LoginForm />

 </div>
</>
) 
}
export default Loginpage