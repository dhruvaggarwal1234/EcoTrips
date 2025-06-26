import './Long_Weekend.css'
import Star from '../Other/Card/Star.png'

function LWeekCard({Trip_name='Nanital, Jim Corbett  +5 more.....' ,Image, Trip_time="3 Days, 2 Night" , Trip_highway="Exp. Chandigarh,Delhi" ,Trip_price="2999"}){

    return(

        <>

         <div className="LWeekend_Card_main">
                  <div className='LWeekend_Card_img' style={{backgroundImage: `url(${Image})`}}>
                    <div className='LStar_div'><img src={Star} alt=""  className='Star' /></div> 
        
                    <div className='LTrip_text'>
                      <div>
                       <div className='Ltext_1'> {Trip_name}  <br /> </div>
                       <div className='Ltext_2'>{Trip_time}</div>
                      </div>
        
                      <div className='LMarign_div'><br/>{Trip_highway}</div>
                    </div>
                  </div>
                  <div className='LPrice_main'> 
                    <div className='LPrice_1'>RS {Trip_price} &nbsp; <span>includes stay, meal, trans......</span></div>
                    <div className='LPrice_2'><button className='LPrice_2_btn'>Book Now &gt; </button></div>
                   </div>
                 </div>
        </>
    );
}

export default LWeekCard;
