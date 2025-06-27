import  './Offbeat.css';


function OCard({Image , Trip_name}){
    return(

        <div className='O_Outer_Card' style={{
            background: `url(${Image})`, backgroundPosition: "center",
            backgroundRepeat: "no-repeat", backgroundSize: "cover"
        }}>
        <div className='O_Inner_Card'>
               {Trip_name}
        </div>
        </div>

    );

}
export default OCard;
