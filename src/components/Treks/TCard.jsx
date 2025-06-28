

 import Star from '../Image/Card/Star.png'

function TCard({Image, Trip_Rs="1999", Trip_name="null"}){
    return(
        <>
        <div className='Trek_Main_div'>
          <div className='Trek_Img' style={{background:`url(${Image})` , backgroundSize:'cover',
    backgroundRepeat:'no-repeat',    backgroundPosition:'center'}}></div>
          
          <div className='Trek_Price'>
            <div className='Trek_Price_1'>
              <div className='Trek_Name'>
                <p>{Trip_name}</p>
                <p style={{color:'#6D6464' , marginTop:"5px"}}>RS {Trip_Rs}</p>
              </div>
              <div className='Trek_Star'><img src={Star} alt="" /></div >
            </div>
            <div className='Trek_details'> <button className='Detail_btn'> View Details &gt; </button></div>
          </div>
        </div>
        </>
    );
}

export default TCard;