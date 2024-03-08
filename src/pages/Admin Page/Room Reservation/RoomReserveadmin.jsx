/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";
import RoomReserveCss from "../Room Reservation/RoomReserveCSS.module.css"

import imgplace from "../../../assets/placeholder.jpg"


const RoomReserveadmin = () => {

    const nav = useNavigate()

  return (
    <>
    <h1 className={RoomReserveCss.h1}>Room Reservation</h1>

      <div className={RoomReserveCss.container}>

        
        <div className={RoomReserveCss.box} >

          <div className={RoomReserveCss.img}>

           <img className={RoomReserveCss.img} src={imgplace} alt="" />

          </div>

          <div className={RoomReserveCss.text}> 

          <p>Book Room</p>

          </div>

          <div className={RoomReserveCss.info} onClick={()=>nav('book')}>

            <p>More Info</p>

          </div>

        </div>

      

        <div className={RoomReserveCss.box} >

           <div className={RoomReserveCss.img}>

            <img className={RoomReserveCss.img} src={imgplace} alt="" />

          </div>

          <div className={RoomReserveCss.text}> 

          <p>Pending Request</p>

          </div>

          <div className={RoomReserveCss.info} onClick={()=>nav('request')}>

            <p>More Info</p>

          </div> 

        </div>

        <div className={RoomReserveCss.box} >

          <div className={RoomReserveCss.img}>

            <img className={RoomReserveCss.img} src={imgplace} alt="" />

          </div>

          <div className={RoomReserveCss.text}> 

          <p>Reserved Room</p>

          </div>

          <div className={RoomReserveCss.info} onClick={()=>nav('view')}>

            <p>More Info</p>

          </div>

        </div>

      </div>

      




      
    </>
  );
};

export default RoomReserveadmin;
