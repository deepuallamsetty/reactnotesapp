import notesImage from './notes.png';
import lockImage from './lock.png'
import './Imagenotes.css';

function Imagenotes(){
    return(
        <div className="notescontainer">
           <img  src={notesImage} alt="notes" className="notesimage"/>
    
           <h1 className="pocketnotes">Pocket Notes</h1>
           <p className="notespara">Send and receive messages without keeping your phone online.<br/>
            Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
        <div className="endcontainer"> 
            <img src={lockImage} alt="lock" className="lockimage"/>
            <p>end-to-end encrypted</p>
        </div>
        </div>
    )
}
export default Imagenotes