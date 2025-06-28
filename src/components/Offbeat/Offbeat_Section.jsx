import './Offbeat.css';
import OCard from './OCard.jsx'
import Haripurdhar from '../Image/Offbeat/Haripurdhar.png'
import Jibhi from "../Image/Offbeat/Jibhi.png"
import Palampur from "../Image/Offbeat/Palampur.png"
import Koksar  from "../Image/Offbeat/Koksar.png"

function Offbeat_Section(){

    return(

        <>
        <section className="Offbeat_Section">
        <div className="Offbeat_Text">
            <h2>Offbeat</h2>
            <h1>Locations</h1>
        </div>
        <div className="Offbeat_Card">
            <OCard Trip_name="Koksar" Image={Koksar}/>
            <OCard Trip_name="Haripurdhar" Image={Haripurdhar}/>
            <OCard Trip_name="Jibhi" Image={Jibhi}/>
            <OCard Trip_name="Palampur" Image={Palampur}/>
             </div>
       
        </section>
        </>
    );
}

export default Offbeat_Section;