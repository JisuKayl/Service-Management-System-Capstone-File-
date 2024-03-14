/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import CreateANNCSS from "./CreateANNCSS.module.css"


const CreateANN = () => {

  return (
    <>
      <h1>Create Announcement</h1>

      <form action="/CreateANN" method="POST">

      <div className={CreateANNCSS.box}>

      <h2 className={CreateANNCSS.head}>Title</h2>

      <div>

       <input type="text" id="title" name="title" className={CreateANNCSS.title}></input>

      </div>

      <div>

       <textarea name="msg" id="msg" className={CreateANNCSS.msg}></textarea>

      </div>

      <div className={CreateANNCSS.box2}>

      <button type="button" className={CreateANNCSS.cancelbut}>Cancel</button>
      <button type="button" className={CreateANNCSS.sendbut}>Send</button>

      </div>

      </div>

    

      </form>

      
      
    </>
  );
};

export default CreateANN;
