import "./Review.css";
import RCard from './RCard.jsx'
import Mohit from "../Other/Review/Mohit.png"
import Pankaj from '../Other/Review/Pankaj.png'
import Aanchal from '../Other/Review/Aanchal.png'
import Jai from "../Other/Review/Jai.png"


function Review_Section(){

    return(
     <>

<section className="Review_Section">
        <div className="Review_Text">
            <h2>What Our</h2>
            <h1>Travellers Say</h1>
        </div>
        <div className="Review_Card">
           <RCard Image={Pankaj}  Trip_name="A hidden gem made unforgettable by your amazing tour planning! My trip to Chail was peaceful, scenic, and incredibly well-managed. Loved the offbeat vibe and the smooth travel experience. Thank you for making it so special!"  R_name="Pankaj Dhiman, 24"/>

           <RCard Image={Mohit}  Trip_name="Had an amazing trip to McLeodganj thanks to your perfectly planned tour package! Everything from the stay to the travel was smooth and well-organized. Truly one of my best travel experiences — will definitely recommend your services to others!"  R_name="Mohit Goyal, 23"/>

           <RCard  Image={Aanchal} Trip_name="Koksar was an absolute delight — raw, serene, and breathtaking! Huge thanks to your team for curating such a smooth and memorable offbeat getaway. Everything was perfectly arranged, making the experience truly special." R_name="Aanchal Jangir, 22" />

           <RCard Image={Jai}  Trip_name="A hidden gem made unforgettable by your amazing tour planning! My trip to Chail was peaceful, scenic, and incredibly well-managed. Loved the offbeat vibe and the smooth travel experience. Thank you for making it so special!" R_name="Jai Kush Mehta, 22"/>

           
             </div>
       
        </section>
     </>
    );
}

export default Review_Section;