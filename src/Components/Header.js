import './Header.css';

 function Notes({handleCreateopen,crtgrpname,handleSelectedgrp,selectedgrp, isbackclicked}){
 
   
  
    return(
    <div className='Headercontainer'>
        {isbackclicked && (
             <div >
            
             <h1>Pocket Notes</h1>
             <button className="createbtn"  onClick={handleCreateopen} ><span style={{fontSize:"20px", paddingRight:"8px"}}>+</span> Create Notes group</button>
             <div className='grpContainer'>
             {crtgrpname.map((notesname, index) => (
                <button className="notesContainer" onClick={() => handleSelectedgrp(index)}>
                   <div key={index} style={{display:"flex"}} className={selectedgrp === index ?'notesnamestyle':''} onClick={() => handleSelectedgrp(index)}  data-index={index}>
                   <p  className='btnletter' style={{backgroundColor:notesname.color}}>{notesname.value.slice(0, 2).toUpperCase()}</p>
                   <p  className="notesname">{notesname.value}</p>
                   </div>
                   </button>
         ))}
             </div>
         </div>
        )}
       
    </div> 
        
    )
 }
 
export default Notes