/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AnnouncementCss from "./AnnCSS.module.css";


const Announcementadmin = () => {
  const nav = useNavigate();

  const [blogs,setBlogs]=useState(null)

  // this part not working
  // https://www.youtube.com/watch?v=Wb-0CkLiyQk&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=31

  const handleDelete = () =>{
    // const newBlogs = blogs.filter(blog => blog.id !=id)
    // setBlogs(newBlogs)

    fetch("http://localhost:4000/blogs"+ blog.id,{
      method: 'DELETE'
    })
  }

  useEffect(()=>{
    fetch("http://localhost:4000/blogs")
    .then(res =>{
      return res.json()
    })
    .then(data =>{
      setBlogs(data)
    })
    .catch(err=>{
      // new terminal
      // start the server npx json-server --watch Data/db.JSON --port 4000
      // source https://www.youtube.com/watch?v=eao7ABGFUXs&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=16
      console.log(err.message);
    })
    

  },[]);
  
  return (
    <>
  
      <h1 className={AnnouncementCss.h1}>Announcement</h1>

      <div className={AnnouncementCss.createbox} onClick={() => nav("create")}>

       <button type="button" className={AnnouncementCss.createbut}> Create Message</button>
      </div>

      

      {blogs && blogs.map((blog)=>

        <div>

          <div className={AnnouncementCss.box2} key={blog.date}>

            <div>
              <p className={AnnouncementCss.circle}>Image</p>
            </div>  

            <div className={AnnouncementCss.description}>
              <p style={{ fontWeight: "bold", fontSize: "1.3rem" }}>{blog.tile}</p>
              <p>{blog.msg}</p>
            </div>

            <div className={AnnouncementCss.posted}>

              <br></br>
              {/* change it by date if can */}
              <p>Posted by: {blog.admin}</p>

              <button type="button"
              className={AnnouncementCss.dellbutt}
              onClick={()=> handleDelete(blog.id)}
              >Delete</button>

            </div>

          </div>

        </div>

      )}


     



      {/* <h1 className={AnnouncementCss.h1}>Announcement</h1>

      <div className={AnnouncementCss.createbox} onClick={() => nav("create")}>
       <button type="button" className={AnnouncementCss.createbut}> Create Message</button>
      </div>

      <div onClick={() => nav("details")}>
        
        <div className={AnnouncementCss.box2}>
          <div>
            <p className={AnnouncementCss.circle}>Image</p>
          </div>

          <div className={AnnouncementCss.description}>
            <p style={{ fontWeight: "bold", fontSize: "1.3rem" }}>Title</p>
            <p>Description</p>
          </div>

          <div className={AnnouncementCss.posted}>

            <br></br>
            <p>Posted on: 12/12/2222</p>
            <button type="button">Delete</button>

          </div>

         
        </div>

      </div> */}

    </>
  );
};

export default Announcementadmin;
