import Ecard from "./ECard.jsx";
import "./Explore.css";
import Chail from "../Image/Explore/Chail.png"
import Shimla from "../Image/Explore/Shimla.png"
import Rishikesh from "../Image/Explore/Rishikesh.png"
import Dharamshala from "../Image/Explore/Dharamshala.png"
import Dehradun from "../Image/Explore/Dehradun.png"


function Explore_Section(){

    return(
        <>
        <section className="Explore_Section">
        <div className="Explore_Text">
            <h2>Explore</h2>
            <h1>Popular Spots</h1>
        </div>
        <div className="Explore_Card">
             <Ecard Image={Dharamshala} />
             <Ecard Image={Rishikesh} Trip_name="Haridwar/ Rishikesh"/>
             <Ecard Image={Shimla} Trip_name="Shimla/ Narkanda"/>
             <Ecard Image={Dehradun} Trip_name="Dehradun/ Mussorie"/>
             <Ecard Image={Chail} Trip_name="Chail/ Solan"/>
             </div>
       
        </section>
        </>
    );
}

export default Explore_Section;