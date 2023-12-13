// import React from "react";
// // import browsefund from "./components/browseFund";
// import '../assets/css/naving.css'
// import { useState } from 'react';

// const Nav = () => {

//     const[data,setdata] = useState(false)
//     const toggle=()=>
//     {
//         setdata(true)
//     }
//     return (
//       <div>
//         <nav className="navbar">
//         <div className="left-corner">
        
//         </div>
//         <div className="nav-center">

//         </div>
//         <div className="nav-options">
         
//           <Link to='/'>Browsing Fund</Link>
//           <Link to='/'>Register</Link>
//           {/* <a href="#">Fund Raise For</a>
//           <a href="#">How it works</a>
//           <a href="#">Contact</a> */}
//           <a onClick={toggle} className='login' href="#">Login</a>
//         </div>
//       </nav>

//       {data ?(
//         <div class="sharon">
//             <form class="hari" onsubmit="register()">
//                 <label>Name</label>
//                 <input type="text" name="" id="name"  placeholder="UserName" />
//                 <label>Password</label>
//                 <input type="password" name="" id="pass" placeholder="Password" />
//                 <button>Submit</button>
//             </form>
//         </div>
//       ):(
//         ''
//       )}
//       </div>
//     );
//   };
  
//   export default Nav;

import React from 'react';
import { Link } from 'react-router-dom';
// import '../assets/css/nav.css';

const Nav = () => {
  return (
    <div className="divclass"> 
      <nav className="navstyle">

        <li><Link to='/browse' className='buttonstyle'>BROWSE FUND RAISERS</Link></li>
        <li><Link to='/how' className='buttonstyle'>HOW IT WORKS</Link></li>
        <li><Link to='/funding' className='buttonstyle'>START A FUND RAISER</Link></li>
        <li><Link to='/register' className='buttonstyle'>REGISTER</Link></li>
        <li><Link to='/login' className='buttonstyle'>LOGIN</Link></li>
      </nav>
    </div>
  );
};

export default Nav;

