const Card = () => {
    let mainText = "Simple joys are here to stay...Leap into AR!"
    let videoLink = "..images/chessvid.mov"
    return (
        <div className="card">
           <div className="cardHeader"> 
            {mainText}
            </div> 
           <video className="video" controls>
               <source src={videoLink} type= "video/mov" />
           </video>
        </div>
      
      );
}
 
export default Card
