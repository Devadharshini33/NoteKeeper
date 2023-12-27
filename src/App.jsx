import React,{useState} from "react"
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Note from "./Components/Note";
import Content from "./Components/Content";
function App(){
    const [notes,setNotes]=useState([]);
    function addNote(note){
        setNotes(prevValue=>{
            return [...prevValue,note]

        })
      
       

    }
    function deleteItem(id){
        setNotes(prevValue=>{
            return prevValue.filter((note,index)=>{
                return index!== id
            });
        })

    }
    return (
        <div>
            <Header />
           <Content onAdd={addNote} />
            {notes.map((note,index) => <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content} 
            delete={deleteItem}   
            />)
            }
            <Footer />
        </div>
    );
}
export default App;