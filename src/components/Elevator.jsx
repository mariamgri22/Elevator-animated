import React, { useEffect, useState } from 'react'
import './Elevator.css'

export default function Elevator({floor,leftIndent}) {
     const [isDoorClosed,setIsClosed]=useState(false);
     const [currentFloor,setCurrentFloor]=useState(floor);
     useEffect(()=>{
         setIsClosed(true);
         const timeout=setTimeout(()=>{
             setCurrentFloor(floor);
         },1000);
         const doorTimeout=setTimeout(()=>{
            setIsClosed(false);
        },3000);
        return()=>{
            clearInterval(timeout);
            clearInterval(doorTimeout);
        }
     },[floor])
  return (
    <div className={`Elevator floor-${currentFloor}`} style={{left:leftIndent}}>
         <div className={`door left ${isDoorClosed ? "closed" : "opened"}`} />
      <div className={`door right ${isDoorClosed ? "closed" : "opened"}`} />
    </div>
  )
}
