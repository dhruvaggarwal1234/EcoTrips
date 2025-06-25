import './App.css'
import Users from './components/Other/icon/users.png'
import Heart from './components/Other/icon/heart.png'
import Check from './components/Other/icon/check.png'
import explore from './components/Other/icon/explore.png'

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
      </section>
    </>
  )
}

export default Homepage;
