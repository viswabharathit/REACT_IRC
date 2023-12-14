// App.js
import Nav from "./components/navbar";
import Home from "./components/home";
import Abouting from "./components/about";
import Contact from "./components/contact";
import { Route,Routes} from "react-router-dom";
function App() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<Abouting/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}
export default App;
