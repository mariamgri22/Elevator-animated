
import './App.css';
import { useState } from 'react';
import Elevator from './components/Elevator';

const App=()=>{
  const [floorElevatorFirst,setFloorElevatorFirst]=useState(1);
  const [floorElevatorSecond, setFloorElevatorSecond] = useState(2);

  const CalculateNearestElevator = (clickedFloor) => {
    const distanceToFirst = Math.abs(clickedFloor - floorElevatorFirst);
    const distanceToSecond = Math.abs(clickedFloor - floorElevatorSecond);
    if(distanceToFirst < distanceToSecond){
      setFloorElevatorFirst(clickedFloor);
    }else if(distanceToFirst === distanceToSecond){
      setFloorElevatorFirst(clickedFloor);
      setFloorElevatorSecond(clickedFloor);
    }
    else{
      setFloorElevatorSecond(clickedFloor);
    }
  }
    const CalculateFloorElvOne = (clickedFloor) => {
         setFloorElevatorFirst(clickedFloor);
    }
    const CalculateFloorElvTwo = (clickedFloor) => {
      setFloorElevatorSecond(clickedFloor);
 }
  return(
    <div className="main">
       <div className="floor floor-3">
         <button onClick={() => CalculateNearestElevator(3)} />
       </div>
       <div className="floor floor-2">
         <button onClick={() => CalculateNearestElevator(2)} />
       </div>
       <div className="floor floor-1">
         <button onClick={() => CalculateNearestElevator(1)} />
       </div>
      <Elevator floor={floorElevatorFirst} leftIndent="20%"/>
       <Elevator floor={floorElevatorSecond} leftIndent="60%"/>
         <div className='floor floorInOne'>
           <div>
             <p>1st elevator</p>
           <button onClick={()=>CalculateFloorElvOne(1)}>1</button>
           <button onClick={()=>CalculateFloorElvOne(2)}>2</button>
           <button onClick={()=>CalculateFloorElvOne(3)}>3</button>
           </div>
           <div>
           <p>2nd elevator</p>
           <button onClick={()=>CalculateFloorElvTwo(1)}>1</button>
           <button onClick={()=>CalculateFloorElvTwo(2)}>2</button>
           <button onClick={()=>CalculateFloorElvTwo(3)}>3</button>
           </div>
            </div>
        </div>
  );
}

export default App;