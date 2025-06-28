import "./Review.css";
import R_Star from "../Image/Card/Star.png";
function RCard ({Image,Trip_name="Review Box", R_name = "Dhruv Aggarwal,20"}){
    return(
        <>
        <div className="R_Card">
         <div className='R_Outer_Card' style={{
            background: `url(${Image})`, backgroundPosition: "center",
            backgroundRepeat: "no-repeat", backgroundSize: "102% 105%"
        }}>
        <div className='R_Inner_Card'>
               <div className="R_Star">
                <img src={R_Star} alt="" />
                <img src={R_Star} alt="" />
                <img src={R_Star} alt="" />
                <img src={R_Star} alt="" />
                <img src={R_Star} alt="" />
               
               </div>
               <div className="Review">{Trip_name}</div>
        </div>
        </div>
        <div className="R_name">{R_name}</div>
        </div>
        </>
    );
}

export default RCard;
