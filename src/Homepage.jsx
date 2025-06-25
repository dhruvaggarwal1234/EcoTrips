import './App.css'
import Users from './components/Other/icon/users.png'
import Heart from './components/Other/icon/heart.png'
import Check from './components/Other/icon/check.png'
import explore from './components/Other/icon/explore.png'

import Search from './components/Search_box/Search'
import WCard from './components/Weekend_Card/WCard'
import Kasoliimage from './components/Other/Card/Kausali.png'
import Chailimage from "./components/Other/Card/Chail.png"
import Chakrataimage from "./components/Other/Card/Chakrata.png"
import Tehriimage from './components/Other/Card/Tehri.png'
import MountAbuimage from './components/Other/Card/MountAbu.png'
import Rishikeshimage from './components/Other/Card/Rishikesh.png'



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

          <WCard  Trip_name="Kausali, HP" Image={Kasoliimage}  Trip_price='2499'/>
          <WCard  Trip_name="Chail, HP" Image={Chailimage}  Trip_price='2499'/>
          <WCard  Trip_name="Chakrata, Uttarakhand" Image={Chakrataimage}  Trip_price='2499'/>
          <WCard  Trip_name="New Tehri, Uttarakhand" Image={Tehriimage}  Trip_price='2999'/>
          <WCard  Trip_name="MountAbu, Rajasthan" Image={MountAbuimage}  Trip_price='2999'/>
          <WCard  Trip_name="Rishikesh, Uttarakhand" Image={Rishikeshimage}  Trip_price='1999'/>
          
         
         
        </div>
      </section>
    </>
  )
}

export default Homepage;
