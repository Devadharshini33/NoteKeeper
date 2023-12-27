import React, { useState } from "react"
import AddIcon from '@mui/icons-material/Add';

import Zoom from '@mui/material/Zoom';

function Content(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });
    function handleChange(event) {
        const { name, value } = event.target;
        setNote(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }
    function handleClick(event) {
        event.preventDefault();
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        })
    }
    const [check,checkState]=useState(false);
    function expand(){
        checkState(true);
    }

    return (
        <div>
            <form className="create-note">
               {check? <input onChange={handleChange} name="title" value={note.title} placeholder="Title" />:null}
                
                <textarea onChange={handleChange} onClick={expand} name="content" value={note.content} placeholder="Take a note..." 
                rows={check?3:1} 
                />
              <Zoom in={check}>
            <button className="formButton" onClick={handleClick}
            ><AddIcon /></button>
            </Zoom>
               
            </form>
        </div>
    );
}
export default Content;