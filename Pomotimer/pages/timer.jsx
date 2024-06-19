import React, { useState, useRef, useEffect, useContext } from "react";
import {BsFillPlayFill, BsPauseFill} from "react-icons/bs"
import Popup from 'reactjs-popup'
import Timerbackground from "../components/timerbackground";
 import { FinalUserContext } from "../Context/FinalUserContext"
   import { Link } from "react-router-dom";
let nextId = 0;
function Timer()
{
  
  const minuteref = useRef();
  const secondsref = useRef();
 
   const{finaluser} = useContext(FinalUserContext);

  const [breakminutes, setBreakminutes] = useState(0);
  const [breakseconds, setBreakseconds] = useState(0)
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(null)
 const[breakrunning, setBreakRunning] = useState(null)
 const [pomotitle, setPomotitle] = useState("")
 const [pomoArray,setPomoArray ]= useState([]);
 
 
useEffect(()=>{
let innival
if (running){
  innival = setInterval(() => {
 if (seconds == 0){
  {setMinutes((minutes) => minutes - 1)
    setSeconds(59)}
 }
   else if (minutes >= 0)
  {
  setSeconds((seconds) => seconds - 1 + 0);
 } 
  }, 1000);

  return () => {clearInterval(innival);

    timerup()

}
}}, [minutes, seconds, running]);
//sets the interval
 useEffect(()=>{
let intival
if (breakrunning){
  intival = setInterval(() => {
 if (breakseconds == 0){
  {setBreakminutes((breakminutes) => breakminutes - 1)
    setBreakseconds(59)}
 }
   else if (breakminutes >= 0)
  {
  setBreakseconds((breakseconds) => breakseconds - 1 + 0);
 
} 
 
  }, 1000);

  return () => {clearInterval(intival);
   
    breaktimerup()
}
}}, [breakminutes, breakseconds, breakrunning]);

 
function setthoseMinutes()
{
setMinutes(minuteref.current.value)
 
}
//this fires when the timer reaches zero
const timerup = () =>{
  if (minutes == 0 && seconds == 0)

  {
 setMinutes(0);
   setSeconds(0);
   setRunning(false);
   setBreakminutes(5);
   setBreakseconds(0);   
 startBreakTimer();
  }
}

const breaktimerup = () => {
if (breakminutes == 0 && breakseconds == 0)
{pauseBreakTimer();
}

}

 function startBreakTimer(){
     removefromList();
   setBreakRunning(true)
      console.log("hello");
    }


 function setthoseSeconds()
{
setSeconds(secondsref.current.value)
}
 
function pushThatTitle(e)
{ 
e.preventDefault()
setPomoArray([...pomoArray, {id:nextId++, title: pomotitle}])
pomoArray.push(pomotitle)
 
console.log(pomoArray)
}

const removefromList = () =>
 {

pomoArray.shift();
console.log(pomoArray)
 }

  function startTimer(){
  if (minutes !==0 || seconds !== 0)
    {setRunning(true)}
     else {
 pauseTimer();
     }}
 function pauseTimer(){
      setRunning(false);
     }

      function pauseBreakTimer(){
      setBreakRunning(false);
     }
  return (
<div>
<div>
<div id = "greeting">{!!finaluser && (<h3>Welcome {finaluser.username}!</h3>)}</div> 
 <Link to = "/"><button>Logout</button></Link>

</div>
 <Timerbackground/>
 <Popup trigger = {<button>Click to open</button>}>

<div id = "menu"> 
<p><label for ="nameinput">Enter name here</label>
<input id = "nameinput" type = "text" value = {pomotitle}  onChange={e => setPomotitle(e.target.value)}></input></p>
<button onClick = {pushThatTitle}></button >

 </div>
 </Popup>

<div id = "timerbox" style = {{backgroundColor:"cadetblue"}}>
<div id = "pomolist">
<ul>
{pomoArray.map(pomotitle => (<li key = {pomotitle.id++}>{pomotitle.title}
</li>))}
</ul>
</div>
 
   <p><div id = "timerbar"><div id = "minutes">{minutes}</div><div id = "seconds">{seconds}</div></div></p>
  
  <div id = "Breaktime"> 
     Break Time
   <p><div id = "timerbar"><div id = "minutes">{breakminutes}</div> <div id = "seconds">{breakseconds}</div></div></p>
   </div>
  {!running && (<button onClick={startTimer}><BsFillPlayFill/></button>)}
    <button onClick={pauseTimer}><BsPauseFill/></button>
    <p><label for = "minuteinput">Enter minutes</label></p>
  <input type= "number" min = {0} max = {59} value ={minutes} ref={minuteref} onChange={setthoseMinutes}></input>
  <p> <label for = "secondinput">Enter seconds</label>
  <input type="number" min = {0} max = {59}value = {seconds}  ref = {secondsref} onChange={setthoseSeconds}></input></p>
  


</div>

</div>

);
}

export default Timer
 