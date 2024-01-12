import Card from "./Card";

export default function Tours({tours,handleTours}) {

  return (
    <div>
      <div className="Tours w-10/12 flex flex-wrap mx-auto justify-center items-center gap-6 ">
        {
          tours.map((tour)=>{
            return <Card key={tour.id} {...tour} handleTours={handleTours}></Card>
          })
        }
      </div>
    </div>
  )
}
