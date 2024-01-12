import React , {useState} from "react";

export default function Card({id,image,info,price,name,handleTours}) {

    const[readmore,setReadmore]=useState(false);
    const description=readmore?info:`${info.substring(0,200)}...`;
    const handleReadmore=()=>{
        setReadmore(!readmore);
    }

  return (
    <div className="Card w-[22rem] h-max p-4 rounded-md overflow-auto flex flex-col gap-6  items-center shadow-black shadow-md">
      <img className="place_image w-96 h-72 object-cover" src={image} alt={name} />
      <div className="tour_details">
        <h4 className="tour_price text-center font-bold  font-sans">{price}</h4>
        <h4 className="tour_name text-center font-bold  font-sans">{name}</h4>
      </div>
      <div className="description">
        {description}

         <span className="showmore cursor-pointer text-blue-400" onClick={handleReadmore}>
          {readmore?' Show Less':' Read more'}
      </span>
      </div>
      <button className="notinterested  bg-black w-32 h-8 rounded-md  text-red-600" onClick={()=>handleTours(id)}>
        Not Interested
      </button>
      
    </div>
  );
}
