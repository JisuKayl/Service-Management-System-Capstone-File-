/* eslint-disable no-unused-vars */
import React from "react";
import BorrowCSS from "../BorrowEquipmentadmin/borrowcss.module.css";
import { useNavigate } from "react-router-dom";

import BEimage from "../../../../assets/placeholder.jpg";

const BorrowEquip = () => {

  const nav = useNavigate()
  
  return (
    <>

      <div className={BorrowCSS.container}>
        
        <div className={BorrowCSS.box}>

            <div className={BorrowCSS.imgbox}>
             <img className={BorrowCSS.img} src={BEimage} alt="" />
            </div>

            <div className={BorrowCSS.text}>

            <p>Projector</p>
            

            </div>

            <div className={BorrowCSS.booknow} onClick={()=>nav('create')}>
              <p>View Equipment</p>
            </div>

        </div>

      

        <div className={BorrowCSS.box}>

            <div className={BorrowCSS.imgbox}>
                <img className={BorrowCSS.img} src={BEimage} alt="" />
            </div>

            <div className={BorrowCSS.text}>

            <p>Projector</p>

            </div>

            <div div className={BorrowCSS.booknow} onClick={()=>nav('create')}>
              <p>View Equipment</p>
            </div>

        </div>

        <div className={BorrowCSS.box}>

            <div className={BorrowCSS.imgbox}>
                <img className={BorrowCSS.img} src={BEimage} alt="" />
            </div>

            <div className={BorrowCSS.text}>

            <p>Projector</p>

            </div>

            <div div className={BorrowCSS.booknow} onClick={()=>nav('create')}>
              <p>View Equipment</p>
            </div>

        </div>

        <div className={BorrowCSS.box}>

            <div className={BorrowCSS.imgbox}>
                <img className={BorrowCSS.img} src={BEimage} alt="" />
            </div>

            <div className={BorrowCSS.text}>

            <p>Projector</p>

            </div>

            <div div className={BorrowCSS.booknow} onClick={()=>nav('create')}>
              <p>View Equipment</p>
            </div>

        </div>

      </div>  
      

      {/* 2nd */}

      <div className={BorrowCSS.container}>
        
        <div className={BorrowCSS.box}>

            <div className={BorrowCSS.imgbox}>
                <img className={BorrowCSS.img} src={BEimage} alt="" />
            </div>

            <div className={BorrowCSS.text}>

            <p>Projector</p>

            </div>

            <div div className={BorrowCSS.booknow} onClick={()=>nav('create')}>
              <p>View Equipment</p>
            </div>

        </div>

        <div className={BorrowCSS.box}>

            <div className={BorrowCSS.imgbox}>
                <img className={BorrowCSS.img} src={BEimage} alt="" />
            </div>

            <div className={BorrowCSS.text}>

            <p>Projector</p>

            </div>

            <div div className={BorrowCSS.booknow} onClick={()=>nav('create')}>
              <p>View Equipment</p>
            </div>

        </div>

        <div className={BorrowCSS.box}>

            <div className={BorrowCSS.imgbox}>
                <img className={BorrowCSS.img} src={BEimage} alt="" />
            </div>

            <div className={BorrowCSS.text}>

            <p>Projector</p>

            </div>

            <div div className={BorrowCSS.booknow} onClick={()=>nav('create')}>
              <p>View Equipment</p>
            </div>

        </div>

        <div className={BorrowCSS.box}>

            <div className={BorrowCSS.imgbox}>
                <img className={BorrowCSS.img} src={BEimage} alt="" />
            </div>

            <div className={BorrowCSS.text}>

            <p>Projector</p>

            </div>

            <div div className={BorrowCSS.booknow} onClick={()=>nav('create')}>

              <p>View Equipment</p>

            </div>

        </div>
        
      </div>
    
      
    </>
  );
};

export default BorrowEquip;
