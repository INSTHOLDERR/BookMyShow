import axios from 'axios';
import { useNavigate } from "react-router-dom";
import "./style/log.css"
    
function Login(){
    const navigate =useNavigate();
    const logg=(event)=>{

        let username = document.getElementById("username");
        let password = document.getElementById("password");
    
        event.preventDefault();

        console.log(username.value);
        console.log(password.value);


        const response = axios.post('http://localhost:3000/login',{
            username:username.value,
            password:password.value
            })

       
        response.then(res=>{
            alert(res.data.msg);
            localStorage.setItem("token", res.data.token);
            navigate("/home");

        })
        .catch(error =>{
            console.log(error);
        })
    }
    

    return(
    <section className="sign-in">
      <div className="container">
        <div className="signin-content">
          <div className="signin-image">
            <figure><img src="images/signin-image.jpg" alt="sign up image" /></figure>
            <a href="/register" className="signup-image-link">Create an account</a>
          </div>

          <div className="signin-form">
            <h2 className="form-title">Sign in</h2>
            <form method="POST" className="register-form" id="login-form" onSubmit={logg}>
              <div className="form-group">
                <label htmlFor="your_name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                <input type="text"  name="username" id="username" placeholder="username"  />
              </div>
              <div className="form-group">
                <label htmlFor="your_pass"><i className="zmdi zmdi-lock"></i></label>
                <input type="password" name="password" id="password" placeholder="password" />
              </div>
              <div className="form-group form-button">
                <input type="submit" name="signin" id="signin" className="form-submit" value="Log in"  />
              </div>
            </form>
            <div className="social-login">
              <span className="social-label">Or login with</span>
              <ul className="socials">
                <li><a href="#"><i className="display-flex-center zmdi zmdi-facebook"></i></a></li>
                <li><a href="#"><i className="display-flex-center zmdi zmdi-twitter"></i></a></li>
                <li><a href="#"><i className="display-flex-center zmdi zmdi-google"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
    
}
export default Login