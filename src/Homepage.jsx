import './App.css'
import Users from './components/Image/icon/users.png'
import Heart from './components/Image/icon/heart.png'
import Check from './components/Image/icon/check.png'
import explore from './components/Image/icon/explore.png'
import Search from './components/Search_box/Search'
import WSection from './components/Weekend_Card/WSection'
import LongWeekSection from './components/Long_Weekend/LongWeekSection'
import Treks_Section from './components/Treks/Treks_Section'
import Explore_Section from './components/Explore/Explore_Section.jsx'
import Offbeat_Section from './components/Offbeat/Offbeat_Section.jsx'
import Review_Section from './components/Reviews/Review_Section.jsx'
import Ecotrips from './components/EcoTrips/Ecotrips.jsx'
import logo from './components/NAV/Img/logo.png'
import F from './components/Image/logo/F.png'
import I from './components/Image/logo/I.png'
import T from './components/Image/logo/T.png'
import W from './components/Image/logo/W.png'
import L from './components/Image/logo/L.png'
import G from './components/Image/logo/G.png'


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

  <Explore_Section/>
  <WSection/>
  <Treks_Section/>
  <LongWeekSection/>
    
    <Offbeat_Section/>
    <Ecotrips/>
    <Review_Section/>

   
  <footer className='footer'>
    <div className='Logo_div'><div ><img src={logo} alt="" className='logo'  draggable="false"/>
                   <span className='logotext'>Travel || Discover || Meet || Repeat</span>
                </div></div>
    <div className='Footer_link'>
      <img src={F} alt="" className='F' />
      <img src={I} alt="" className='I' />
      <img src={T} alt="" className='T' />
      <img src={W} alt="" className='W' />
      <img src={L} alt="" className='L' />
      <img src={G} alt="" className='G' />
    </div>
  </footer>
      

    </>
  )
}

export default Homepage;
