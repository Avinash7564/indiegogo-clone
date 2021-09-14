
export default function CarouselImageBox(){

 
   let carouselImage=()=>{
     
      return `./carousel3.jpg`
   }
 

   

    return (
        
        <>
        <div className="carouselImageBoxMainDiv">
        
        <div className="imageBox">
            <img id="carouselImageId"   src={carouselImage()}  alt="image1" />
            
        </div>
       
        
        
        </div> {/* carouselImageBoxMainDiv */}
        
        </>
        )
}