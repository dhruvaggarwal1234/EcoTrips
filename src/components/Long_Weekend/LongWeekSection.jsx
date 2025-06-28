import './Long_Weekend.css'
import LWeekCard from './LWeekCard';
import Rishikesh from '../Image/LONGWCARD/Rishikesh.png'
import HatuPeak from '../Image/LONGWCARD/HatuPeak.png'
import Dharamshala from '../Image/LONGWCARD/Dharamshala.png'
import Kullu from '../Image/LONGWCARD/Kullu.png'
import Mussoorie from '../Image/LONGWCARD/Mussoorie.png'
import Nainital from '../Image/LONGWCARD/Nainital.png'
function LongWeekSection(){

    return(
        <>
        <section className='LWeekend_Section'>
        <div className='LWeekend_Div'>
          <p>Long Weekend</p>
          <p style={{color:'#897D7D' , fontSize:'2.45rem' ,fontWeight:"bold"}}>Adventures</p>
        </div>

        <div className='Lweekend_trip'>

          <LWeekCard Trip_price='3999' Trip_name='Haridwar, Rishikesk, Tapovan + 5 more....' Image={Rishikesh}/>
          <LWeekCard Trip_name='Nanital, Jim Corbett  +5 more.....' Trip_time='4  Days, 3 Night' Image={Nainital} Trip_price='4499'/>
          <LWeekCard Trip_name='Shimla, kufri, Narkanda +3 more....' Trip_price='3499' Image={HatuPeak}/>
          <LWeekCard Trip_name='Dehradun, Mussorie, Landour +3 more....' Trip_price='2999' Image={Mussoorie}/>
          <LWeekCard Trip_name='Kullu, Manali, Sissu + 5 more....'  Trip_time='4  Days, 3 Night' Image={Kullu} Trip_price='4999'/>
          <LWeekCard Trip_name='Dharmshala, Mcleodganj+ 5 more....' Trip_price='3999' Image={Dharamshala}/>
         
          
         
         
        </div>
      </section>
        </>
       
    );


}

export default LongWeekSection;