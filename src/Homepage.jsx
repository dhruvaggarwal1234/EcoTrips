import './App.css'
import Users from './components/Other/icon/users.png'
import Heart from './components/Other/icon/heart.png'
import Check from './components/Other/icon/check.png'
import explore from './components/Other/icon/explore.png'
import Search from './components/Search_box/Search'
import WSection from './components/Weekend_Card/WSection'
import LongWeekSection from './components/Long_Weekend/LongWeekSection'
import Treks_Section from './components/Treks/Treks_Section'
import Explore_Section from './components/Explore/Explore_Section.jsx'
import Offbeat_Section from './components/Offbeat/Offbeat_Section.jsx'
import Review_Section from './components/Reviews/Review_Section.jsx'




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

    <Review_Section/>
  
      
    </>
  )
}

export default Homepage;
