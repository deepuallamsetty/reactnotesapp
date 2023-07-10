import './Notescontent.css';
import React, { useState ,useEffect} from 'react'; 
function Notescontent ({selectedgrp,handleNotesHeading,setbackclicked,setnotesclicked,isnotesclicked}){
  const handleEnterkeynotes=(event)=>{
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleNotescontent();
    }
  }
  const handleBackNotes=()=>{
    setnotesclicked(false)
    setbackclicked(true)
  }

const[inputnotes,setinputnotes]=useState('')
const[submittednotes,setsubmittednotes]=useState( [])


const handleinputNotes=(event)=>{
  setinputnotes(event.target.value)
}



const date = new Date();
    const monthName = date.toLocaleString('en-US', { month: 'long' });
    const hour = date.getHours();
    const amOrPm = hour >= 12 ? 'PM' : 'AM';
    const hour12Format = hour % 12 || 12;
    const time = `${hour12Format}:${date.getMinutes()} ${amOrPm}`;
    const dateString = `${date.getDate()} ${monthName} ${date.getFullYear()}`;


const handleNotescontent = () => {
  if (selectedgrp !== null && inputnotes.trim() !== "") {
    const updatedNotes = [...submittednotes];
    const existingNotes = updatedNotes[selectedgrp] || "";
    const noteEntry = {
      date: dateString,
      time: time,
      text: inputnotes
    };
    updatedNotes[selectedgrp] = `${existingNotes}\n${JSON.stringify(noteEntry)}`;
    localStorage.setItem('submittednotes', JSON.stringify(updatedNotes));


    setsubmittednotes(updatedNotes);
    setinputnotes('');
  }
}  


useEffect(() => {
  const existingGroups = localStorage.getItem('submittednotes');

  if (existingGroups) {
    const parsedGroups = JSON.parse(existingGroups);
    setsubmittednotes(parsedGroups);
  }
}, []);
 







   
    return(
      
       <div > {isnotesclicked && (<div className="secondheader" style={{
        display:"block", 
        isnotesclicked: {
          display: isnotesclicked ? 'block' : 'none', 
        }
        }} >
       <div className="header" style={{display:"flex"}} >
         <div>
         <img src='arrow.png' alt='arrow' className='arrowimage' onClick={handleBackNotes}  />
         </div>
       {handleNotesHeading()}
       </div>
       <div className='enterednotes'>
       {submittednotes[selectedgrp] && (
  <div >
    {submittednotes[selectedgrp]
      .split("\n")
      .map((text, idx) => {
        try {
          const noteEntry = JSON.parse(text); 
          return (
            <div key={idx} className='datite'>
              <div style={{marginTop:"30px"}}>
              <p className='datetime'>{noteEntry.time}</p>
              <p className='datetime'>{noteEntry.date}</p>
              </div>
              <div className='notentrytext'>
              <p>{noteEntry.text}</p>
              </div>

            </div>
          );
        } catch (error) {
          console.error("Invalid JSON:", error);
          return null; 
        }
      })}
  </div>
)}
</div>


           <div className="textcontainer">
              <div className="inputtextcontainer" >
              <textarea  className='inputext' placeholder='Enter your text here...........' value={inputnotes} onChange={handleinputNotes} onKeyPress={handleEnterkeynotes} ></textarea>
              <img src='enter.png' alt='enter'className='submit' onClick={handleNotescontent}/>
              </div>
           </div>
           
       </div> )}
        
    </div>
    )
}
export default Notescontent