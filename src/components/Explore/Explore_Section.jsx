import Ecard from "./ECard.jsx";
import "./Explore.css";
import Chail from "../Other/Explore/Chail.png"
import Shimla from "../Other/Explore/Shimla.png"
import Rishikesh from "../Other/Explore/Rishikesh.png"
import Dharamshala from "../Other/Explore/Dharamshala.png"
import Dehradun from "../Other/Explore/Dehradun.png"


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