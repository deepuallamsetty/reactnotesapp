import Header from "./Components/Header";
import Imagenotes from "./Components/Imagenotes"
import Createnotes from "./Components/Createnotes"
import './App.css';

import { useState,useEffect} from "react"
import Notescontent from "./Components/Notescontent";
function App() {
  const[create,setcreate]=useState(false)
  const[grpname,setgrpname]=useState('')
  const[crtgrpname,setcrtgrpname]=useState( [])
  const[selectedgrp,setselectedgrp]=useState(null)
  const[choosecolor,setchoosecolor]=useState()
  const[notesContent,setnotesContent]=useState(false)
  const[imageContent,setimageContent]=useState(true)   
  const[isnotesclicked,setnotesclicked]=useState(false)
  const[isbackclicked,setbackclicked]=useState(true)
 

 
  

 
  const handleCreateopen=()=>{
    setcreate(true)
  }
  const handleCreatenotes=()=>{
    const firstTwoLetters = grpname.slice(0, 2).toUpperCase();
    setcreate(false)
    if (grpname.trim()!==''){
      const newGroup = {
        value: grpname,
        color: choosecolor,
        firstTwoLetters: firstTwoLetters,
      };
      const updatedGroups = [...crtgrpname, newGroup];
      localStorage.setItem('crtgrpname', JSON.stringify(updatedGroups));

      setcrtgrpname(updatedGroups);
      setgrpname('')
    }
  }
  
  useEffect(() => {
    const existingGroups = localStorage.getItem('crtgrpname');

    if (existingGroups) {
      const parsedGroups = JSON.parse(existingGroups);
      setcrtgrpname(parsedGroups);
    }
  }, []);
  const handleGrpname=(event)=>{
    setgrpname(event.target.value)
  }

const handleSelectedgrp=(index)=>{
  setselectedgrp(index)
  setimageContent(false)
  setnotesContent(true)
  setnotesclicked(true)
  if(window.innerWidth>768){
    setbackclicked(true)
  }
  else{
    setbackclicked(false)
  }
 
}

const handleChoosecolor=(color)=>{
    setchoosecolor(color)
}



const handleNotesHeading = () => {

  if (selectedgrp !== null) {
    const { value, firstTwoLetters,color } =crtgrpname[selectedgrp];
    return (
      <div className="container topContainerContent">
        <div style={{display:"flex"}}>
          <p className="btnletter" style={{backgroundColor:color}}>{firstTwoLetters}</p>
          <p className="notesname">{value}</p>
        </div>
      </div>
    );
  }
  return null;
};








return(
    <div>
    <div style={{display:"flex"}} >
      <Header className="Header" handleCreateopen={handleCreateopen} crtgrpname={crtgrpname} 
      handleSelectedgrp={handleSelectedgrp}
       selectedgrp={selectedgrp}  
       isbackclicked={isbackclicked}
      />
      {imageContent && <Imagenotes/>}
      {notesContent && <Notescontent  
       selectedgrp={selectedgrp} crtgrpname={crtgrpname} handleNotesHeading={handleNotesHeading}
       setbackclicked={setbackclicked}
       setnotesclicked={setnotesclicked}
       isnotesclicked={isnotesclicked}
       
       
      />}
    </div>
     { create&&<Createnotes handleCreatenotes={handleCreatenotes} handleGrpname={handleGrpname} 
     crtgrpname={crtgrpname} handleChoosecolor={handleChoosecolor}/>}
    </div>
  )
}

export default App;
