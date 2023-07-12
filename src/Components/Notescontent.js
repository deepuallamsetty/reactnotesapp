import './Notescontent.css';
import SubmitImage from './enter.png'
import arrowImage from './arrow.png'
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
  if (selectedgrp !== null && inputnotes.trim() !== '') {
    const updatedNotes = [...submittednotes];
    let existingNotes = updatedNotes[selectedgrp];
    if (!Array.isArray(existingNotes)) {
      existingNotes = [];
    }
    const noteEntry = {
      date: dateString,
      time: time,
      text: inputnotes
    };
    existingNotes.push(noteEntry);
    updatedNotes[selectedgrp] = existingNotes;
    localStorage.setItem('submittednotes', JSON.stringify(updatedNotes));
    setsubmittednotes(updatedNotes);
    setinputnotes('');
  }
};


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
         <img src={arrowImage} alt='arrow' className='arrowimage' onClick={handleBackNotes}  />
         </div>
       {handleNotesHeading()}
       </div>
       <div className='enterednotes'>
       {submittednotes[selectedgrp] && Array.isArray(submittednotes[selectedgrp]) ? (
        <div>
          {submittednotes[selectedgrp].map((noteEntry, idx) => (
            <div key={idx} className='datite'>
              <div style={{ marginTop: '30px' }}>
                <p className='datetime'>{noteEntry.time}</p>
                <p className='datetime'>{noteEntry.date}</p>
              </div>
              <div className='notentrytext'>
                <p>{noteEntry.text}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p></p>
      )}
</div>


           <div className="textcontainer">
              <div className="inputtextcontainer" >
              <textarea  className='inputext' placeholder='Enter your text here...........' value={inputnotes} onChange={handleinputNotes} onKeyPress={handleEnterkeynotes} ></textarea>
              <img src={SubmitImage}alt='enter'className='submit' onClick={handleNotescontent}/>
              </div>
           </div>
           
       </div> )}
        
    </div>
    )
}
export default Notescontent