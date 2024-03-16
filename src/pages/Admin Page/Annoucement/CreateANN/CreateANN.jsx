/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate}  from 'react-router-dom'
import CreateANNCSS from "./CreateANNCSS.module.css"


const CreateANN = () => {

  const [tile,settitle] = useState("")
  const [msg,setmsg] = useState("")
  const [admin,setadmin] = useState("Admin")

  const nav = useNavigate();

  function handleForm(event){
    event.preventDefault()
   
    const blog = {tile,msg,admin}

    fetch("http://localhost:4000/blogs",{
      method: 'POST',
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(blog)

    }).then(()=>{
      console.log("Added")
      nav('/announcement')
    })

  }

  return (
    <>
      <h1>Create Announcement</h1>

      <form onSubmit={handleForm}>

      <div className={CreateANNCSS.box}>

      <h2 className={CreateANNCSS.head}>Title</h2>

      <div>

       <input type="text" id="title" name="title" 
       className={CreateANNCSS.title} 
       value={tile}
       onChange={e=>settitle(e.target.value)}></input>

      </div>

      <div>

       <textarea name="msg" id="msg" 
       className={CreateANNCSS.msg}
       value={msg}
       onChange={e=>setmsg(e.target.value)}
       ></textarea>

      </div>

      <div className={CreateANNCSS.box2}>

      <button type="button" className={CreateANNCSS.cancelbut}>Cancel</button>
      <button type="submit" className={CreateANNCSS.sendbut}>Send</button>

      </div>

      </div>

    

      </form>


      
      
      
      
    </>
  );
};

export default CreateANN;
