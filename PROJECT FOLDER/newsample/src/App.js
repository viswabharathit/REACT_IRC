// App.js
import Nav from "./components/naving";
import BrowseFund from "./components/browseFund";
import RegisterPage from "./components/register";
import HowItWorks from "./components/Howitworks";
import Fund from "./components/startfund";
import Login from "./components/login";
import { Route,Routes} from "react-router-dom";
import './assets/css/naving.css';
import "./assets/css/browsefund.css";
import './assets/css/register.css';
function App() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/" element={<BrowseFund/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/how" element={<HowItWorks/>}/>
        <Route path="/funding" element={<Fund/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}
export default App;
