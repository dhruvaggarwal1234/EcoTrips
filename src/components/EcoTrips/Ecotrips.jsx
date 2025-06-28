import './Ecotrips.css'
import icon_1 from '../Image/Ecotrip/icon_1.png'
import icon_2 from '../Image/Ecotrip/icon_2.png'
import icon_3 from '../Image/Ecotrip/icon_3.png'
import icon_4 from '../Image/Ecotrip/icon_4.png'


function Ecotrips(){

    return(

       <>
       <section className='Ecotrips_Secction'> 

       <div className="Ecotrips_heading">
            <h2>Why</h2>
            <h1>EcoTrips?</h1>
        </div>

        <div className='Eco_main'>
          <div className='left_side'>
            <div className='E1'></div>
            <ul>
            <li><img src={icon_1} alt="" /><span>Lowest Price Guaranteed</span></li>
            <li><img src={icon_2} alt="" /><span>Verified Consultants and Guides</span></li>
            <li><img src={icon_3} alt="" /><span>Real-Times Dates</span></li>
            <li><img src={icon_4} alt="" /><span>Customizable Itineraries</span></li></ul>
          </div>
          <div className='right_side'>
          <div className='E2'></div>
          <div className='EImg_div'> <div className='Img_1'>
            <div className='Img_Background'></div>
           </div>
           <div className='Img_2'>
            <div className='Img_Background'></div>
           </div>
           <div className='Img_3'>
            <div className='Img_Background'></div>
           </div>
           <div className='Img_4'>
            <div className='Img_Background'></div>
           </div>
           <div className='Img_5'>
            <div className='Img_Background'></div>
           </div>
           <div className='Img_6'>
            <div className='Img_Background'></div>
           </div>
           <div className='Img_7'>
            <div className='Img_Background'></div>
           </div>
           </div>
          </div>
        </div>

       </section>

       </>
      
    );
}


export default Ecotrips;