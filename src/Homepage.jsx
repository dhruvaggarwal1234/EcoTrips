
import './App.css'
import Search_icon from './components/Other/SearchboxImg/search.png'
import Location_icon from './components/Other/SearchboxImg/shape.png'
import Date_icon from './components/Other/SearchboxImg/pinpaper-filled.png'
import Members_icon from './components/Other/SearchboxImg/user.png'

function Homepage() {

  return (
    <>
      <div className='ImgDiv'> 

        <div className='Search_div'>
           <div className='Text_Slogan'>“Discover the world, <br /> &nbsp; keep the <span style={{color:'#B35950'}}>change”</span></div>
           <div className='Search_box'>
           <div style={{color:'Black'}}><img src={Location_icon} alt="" /><input type="text" name="Location" id="Location" placeholder='Location' /></div> 
           <div><img src={Date_icon} alt="" /><input type="text" name="Date" id="Date" placeholder='Date'/></div> 
           <div><img src={Members_icon} alt="" /><input type="text" name="Members" id="Members" placeholder='Members' /></div> 
           <div><img src={Search_icon} alt="" /><input type="button" name="Search" id="Search"  value='Search'/>  </div> 
           </div>
        </div>
      </div>
    </>
  )
}

export default Homepage;
