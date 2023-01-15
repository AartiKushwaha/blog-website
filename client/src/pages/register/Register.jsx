import { Link } from "react-router-dom"
import "./register.css"

export default function Register() {
  return (
    <div className='register'>
      <h1 className="registerTitle">REGISTER</h1>
      <form className="registerForm">
        <label className="registerLabel">Username</label>
        <input type="text" placeholder="Enter username" className="registerInput"/>
        <label className="registerLabel">Email</label>
        <input type="email" placeholder="Enter email" className="registerInput"/>
        <label className="registerLabel">Password</label>
        <input className="registerInput" type="password" placeholder="Enter Password" />
        <button className="registerButton">Register</button>
        <button className="registerLoginButton"><Link className="link" to="/login">LOGIN</Link></button>  
      </form>
    </div>
  )
}
