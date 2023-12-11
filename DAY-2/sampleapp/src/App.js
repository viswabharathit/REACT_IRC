import './asserts/CSS/style.css';
import Nav from './components/Nav.js';
function App()
{
    return (<div>
        <Nav/>
        <form className="container" >
        <h1>SIGN UP PAGE</h1>
        <input type="text" id="name" placeholder="Enter your name" className="auth-input"/>

        <input type="email" id="email" placeholder="Enter your email"className="auth-input"/>

        <input type="password" id="password" placeholder="Enter your password"className="auth-input"/>
        <input type="password" id="confirmpassword" placeholder="Re-enter your password"className="auth-input"/>

        <input type="number" id="number" placeholder="Enter your number"className="auth-input"/>

        <input type="date" name="" id="" className="auth-input"/>

        <input type="number" id="number" placeholder="Enter your age" className="auth-input"/>        
    </form>
    </div>);
}
export default App;