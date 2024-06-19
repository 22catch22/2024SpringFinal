import { useRef } from "react";

import { useState } from "react";
function Timerbackground()
{ const backgroundref = useRef()
  const [background, setBackground] = useState("");

  function changeBackground(){
    setBackground(backgroundref.current.value)
    console.log("hello");
  }
  return(
<div id = "timbackground" style = {{backgroundImage:`url(${backgroundref}`}} >
<div id = "enterbackground">
 <label for = "backgroundinput">insert background url here</label>
 <input type = "text" id = "backgroundinput" ref = {backgroundref} onChange={changeBackground}></input>
</div>
 

 
</div>
)
}
export default Timerbackground