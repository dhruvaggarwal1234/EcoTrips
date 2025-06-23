import logo from './Img/logo.png'
import './Navbar.css'

function  Navbar(){

    return(

        <>
        
        <nav className='Navbar'>
            <div ><img src={logo} alt="" className='logo'  draggable="false"/>
               <span className='logotext'>Travel || Discover || Meet || Repeat</span>
            </div>
            <div className='outerNavlink'><div className='NavLink'> 
            <a href="">Home</a>
            <a href="">About Us</a>
            <a href="">Packages</a>
            <a href="">Reviews</a>
            <a href="">Contact Us</a>
            </div>
<button className='Login_button'>LogIn/SignUp</button>
            </div>
        </nav>
        </>
    );
}

export default Navbar;