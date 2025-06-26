import './Weekend.css'

import WCard from "./WCard"
import Kasoliimage from '../Other/Card/Kausali.png'
import Chailimage from "../Other/Card/Chail.png"
import Chakrataimage from "../Other/Card/Chakrata.png"
import Tehriimage from '../Other/Card/Tehri.png'
import MountAbuimage from '../Other/Card/MountAbu.png'
import Rishikeshimage from '../Other/Card/Rishikesh.png'


function WSection(){

    return(
        <>
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

export default WSection;