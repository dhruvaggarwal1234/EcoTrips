import './App.css'
import Users from './components/Other/icon/users.png'
import Heart from './components/Other/icon/heart.png'
import Check from './components/Other/icon/check.png'
import explore from './components/Other/icon/explore.png'
import Kasoli from './components/Other/Card/Kasoli.png'
import Star from './components/Other/Card/Star.png'
import Search from './components/Search_box/Search'

function Homepage() {

  return (
    <>
      <div className='ImgDiv'> 
      <div className='Main'>
        <Search/>
      <div className='Benfits'>
        <div><img src={Heart} alt="" />
          <div>
            <p>1000+</p>
            <p>Reviews</p>
          </div>
       </div>
       <hr />
        <div><img src={Users} alt="" />
          <div>
            <p>2000+</p>
            <p>Satisfied Customer </p>
          </div>
       </div>
       <hr />
        <div><img src={explore} alt="" />
          <div>
            <p>50+</p>
            <p>Destinations</p>
          </div>
       </div>
       <hr />
        <div><img src={Check} alt="" />
          <div>
            <p>2 Years+</p>
            <p> Experience</p>
          </div>
         </div>
        </div>
        </div>
      </div>

      <section className='Weekend_Section'>
        <div className='Weekend_Div'>
          <p>Weekend</p>
          <p style={{color:'#897D7D' , fontSize:'2.45rem' ,fontWeight:"bold"}}>GateWays</p>
        </div>

        <div className='weekend_trip'>
         <div className="Weekend_Card_main">
          <div className='Weekend_Card_img'>
            <div className='Star_div'><img src={Star} alt=""  className='Star' /></div> 

            <div className='Trip_text'>
              <div>
               <span className='text_1'>Kausali, HP  <br /> </span>
               <span className='text_2'>2 Days, 1 Night</span>
              </div>

              <div className='Marign_div'><br/>Exp. Chandigarh,Delhi</div>
            </div>
          </div>
          <div className='Price_main'> 
            <div className='Price_1'>RS 2499</div>
            <div className='Price_2'><button className='Price_2_btn'>Book Now &gt; </button></div>
           </div>
         </div>
        </div>
      </section>
    </>
  )
}

export default Homepage;
