/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const FormsPage = () => {

  const [blogs,setBlogs]=useState([
    {title:'TEST1',body:'body',author:'admin1',id:1},
    {title:'TEST2',body:'body',author:'admin2',id:2},
    {title:'TEST3',body:'body',author:'admin3',id:3}
  ])
  
  return (
    <>
      <h1>testing</h1>

      <div>
        {blogs.map((blog)=>

        <div className="man" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>BY: {blog.author}</p>
        </div>
        )}

      </div>



    
    </>
  );
};

export default FormsPage;
