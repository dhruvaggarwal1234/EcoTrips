import "./Login.css"


function Login(){

    return(
        <>
        <div className="Login_box">
      <div className="Email">

        <p className="Email_Label">Email ID/Username</p>
        <input type="text" placeholder="Enter Your Email ID/ Username"  className="Email_box"/>
      </div>

<div className="Email">

<p className="Email_Label">Password</p>
<input type="password" placeholder=" Enter Your Password"  className="Email_box"/>
</div>


</div>
<div className="forgot-row">
          <a className="forgot-link" href="#forgot">
            Forgot Password?
          </a>
        </div>

        <button className="login-button">LOGIN</button>

        <div className="or-row">
          <div className="line" />
          <div className="or-text">Or LogIn With</div>
          <div className="line" />
        </div>

        <div className="social-row">
          <button className="social-btn">G</button>
          <button className="social-btn">M</button>
        </div>

        <div className="footer-text">
          By proceeding, you agree to MakeMyTrip's{" "}
          <a href="#privacy">Privacy Policy</a>,{" "}
          <a href="#ua">User Agreement</a> and <a href="#tcs">T&Cs</a>
        </div>


</>
      

    );
}

export default Login ;