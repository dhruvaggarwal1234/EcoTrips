import TCard from './TCard.jsx'
import ChandraShila from '../Other/Treks/ChandraShila.png'
import Triund from "../Other/Treks/Triund.png"
import KedarKantha from "../Other/Treks/KedarKantha.png"
import DayaraBugyal from "../Other/Treks/DayaraBugyal.png"
import KareriLakes from "../Other/Treks/KareriLakes.png"


function Treks_Section(){

    return(
        <>
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
    );
}

export default Treks_Section;