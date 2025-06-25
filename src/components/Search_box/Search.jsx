import Search_icon from '../Other/SearchboxImg/search.png'
import Location_icon from '../Other/SearchboxImg/shape.png'
import Date_icon from '../Other/SearchboxImg/pinpaper-filled.png'
import Members_icon from '../Other/SearchboxImg/user.png'
import './Search.css'


function Search(){
    return(
        <>
        
          <div className='Search_div'>
           <div className='Text_Slogan'>“Discover the world, <br /> &nbsp; keep the <span style={{color:'#B35950'}}>change”</span></div>
           <div className='Search_box'>
           <div  className='Location'><img src={Location_icon} alt="location_icon" /><input type="text" name="Location" id="Location" placeholder='Location' /></div> 
           <div className='Date'><img src={Date_icon} alt="Date_icon" /><input type="text" name="Date" id="Date" placeholder='Date'/></div> 
           <div className='Members'><img src={Members_icon} alt="Members_icon" /><input type="text" name="Members" id="Members" placeholder='Members' /></div> 
           <div className='Search' style={{background:'none'}}><img src={Search_icon} alt="Search_icon" /><input type="button" name="Search" id="Search"  value='Search'/>  </div> 
           </div>
           </div>
         
        
        </>
    );
}

export default Search;