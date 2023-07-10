 
 import './Createnotes.css';
 function Modal({handleCreatenotes,handleGrpname,handleChoosecolor}){
 
      
   

    return(
        <form >
       <div className="creategroup">
        <div className="groupcontainer">
        <h1 className='createnew'>Create New Notes group</h1>
        <div style={{display: "flex"}}>
                <h1 className='groupname'>Group Name</h1>
                <input type="text" placeholder="Enter your group name...."  onChange={handleGrpname}   />

            </div>
            <div style={{display: "flex"}}>
                <h1 style={{paddingTop: "25px"}} className="choosecolor">Choose colour</h1>
                    <div className="buttoncontainer " style={{display:"flex"}}>
                    <p className="button1" onClick={() => handleChoosecolor('#CCCCCC')} ></p>
                    <p className="button2" onClick={() => handleChoosecolor('#FF79F2')}></p>
                    <p className="button3"onClick={() => handleChoosecolor('#43E6FC')}></p>
                    <p className="button4"onClick={() => handleChoosecolor('#F19576')}></p>
                    <p className="button5"onClick={() => handleChoosecolor('#0047FF')}></p>
                    <p className="button6"onClick={() => handleChoosecolor('#6691FF')}></p>
                    </div>
                    
            </div>
            <button className="create" onClick={handleCreatenotes} >Create</button>
            
        </div>

       </div>
       </form>
    )
 }
 export default Modal