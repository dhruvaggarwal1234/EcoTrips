import './Signin.css'
import logo from '../Img/logo.png'
function Signin({OnClose}){

  return(
     <>
     <div className='body'> 
     <div className='Main_sign'>
     <div className='div1'>
      <div className='div1_main'>
     
     <div className='Sign_logo'><img src={logo} alt="" /></div>
     <div></div>
     <div></div>
     </div>
     </div>
     <div className='div2'>this is signup div</div>
     </div>
     <div className='Close_div'>
     
     <button  className="Closebutton" onClick={OnClose}>&times;</button>
    
     </div>
     </div>
     </>
  );

}

export default Signin;