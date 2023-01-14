import "./login.css"
import { Link } from "react-router-dom"

export default function Login() {
  return (
    <div className='login'>
      <h1 className="loginTitle">LOGIN</h1>
      <form className="loginForm">
        <label className="loginLabel">Email</label>
        <input type="email" placeholder="Enter email" className="loginInput"/>
        <label className="loginLabel">Password</label>
        <input className="loginInput" type="password" placeholder="Enter Password" />
        <button className="loginButton">LOGIN</button>
        <button className="loginRegisterButton"><Link className="link" to="/register">REGISTER</Link></button>
      </form>
    </div>
  )
}
