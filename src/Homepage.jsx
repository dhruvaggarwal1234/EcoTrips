import './App.css'
import Users from './components/Other/icon/users.png'
import Heart from './components/Other/icon/heart.png'
import Check from './components/Other/icon/check.png'
import explore from './components/Other/icon/explore.png'
import Search from './components/Search_box/Search'
import WSection from './components/Weekend_Card/WSection'
import LongWeekSection from './components/Long_Weekend/LongWeekSection'
import TCard from './components/Treks/TCard.jsx'
import ChandraShila from './components/Other/Treks/ChandraShila.png'
import Triund from "./components/Other/Treks/Triund.png"
import KedarKantha from "./components/Other/Treks/KedarKantha.png"
import DayaraBugyal from "./components/Other/Treks/DayaraBugyal.png"
import KareriLakes from "./components/Other/Treks/KareriLakes.png"



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

  <WSection/>

  <LongWeekSection/>
       <section className='Treks_Section'>
        <div className='Trek_div'>
          <p>Treks</p>
        <p style={{fontSize:'45px' , color:"#897D7D"}}> We Provide</p>
        </div>
        <div className='Trek_Div_1'> 
        <TCard Trip_name='ChandraShila' Trip_Rs='2999' Image={ChandraShila}/>
        <TCard Trip_name='Triund' Image={Triund}/>
        <TCard Trip_name='KedarKantha' Image={KedarKantha} Trip_Rs='4999'/>
        <TCard Trip_name='Dayara Bugyal' Trip_Rs='6999' Image={DayaraBugyal}/>
        <TCard Trip_name='Kareri Lakes' Image={KareriLakes}/>
        </div>
       
       </section>

      
    </>
  )
}

export default Homepage;
