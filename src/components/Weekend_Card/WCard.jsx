import './Weekend.css'
import Star from '../Other/Card/Star.png'


function WCard({Trip_name ,Image , Trip_time="2 Days, 1 Night" , Trip_highway="Exp. Chandigarh,Delhi" ,Trip_price="2499"}){

    return(
        <div className="Weekend_Card_main">
          <div className='Weekend_Card_img' style={{backgroundImage: `url(${Image})`}}>
            <div className='Star_div'><img src={Star} alt=""  className='Star' /></div> 

            <div className='Trip_text'>
              <div>
               <div className='text_1'> {Trip_name} <br /> </div>
               <div className='text_2'>{Trip_time}</div>
              </div>

              <div className='Marign_div'><br/>{Trip_highway}</div>
            </div>
          </div>
          <div className='Price_main'> 
            <div className='Price_1'>RS {Trip_price}</div>
            <div className='Price_2'><button className='Price_2_btn'>Book Now &gt; </button></div>
           </div>
         </div>
    );
}

export default WCard;