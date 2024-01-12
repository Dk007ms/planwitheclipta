import React, { useState } from "react";
import data from './data';
import Tours from "./components/Tours";

function App() {

  const[tours,setTours]=useState(data);

  const handleTours=(id)=>{
    const newTours=tours.filter(tour=>tour.id!==id);
    setTours(newTours);
  }

  if(tours.length===0){
    return(
      <div className="notours w-screen h-screen flex flex-col justify-center items-center gap-6 overflow-x-hidden">
        <h1 className="no_tours text-3xl font-serif font-bold">No Tours Left</h1>
        <button className="no_tours border-8 w-24 border-black border-dotted text-red-600 font-serif font-bold" onClick={()=>setTours(data)}>Refresh</button>
      </div>
    )
  }

  return (
    <div className="App flex justify-center items-center flex-col w-screen  h-max p-4 gap-24 overflow-x-hidden">
     <h2 className="heading text-5xl font-serif border-4 w-9/12 relative top-8 text-center">Plan With Eclipta</h2>
     <Tours className="tourcontainer" tours={tours} handleTours={handleTours}></Tours>
    </div>
  );
}

export default App;
