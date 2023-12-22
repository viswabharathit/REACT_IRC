import React from "react";
import {Routes,Route} from 'react-router-dom';
import User from './components/users';
import AddUsers from "./components/adduser";
import EditUsers from "./components/edituser";
import './assets/user.css';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<User/>}/>
      <Route path='/add' element={<AddUsers/>}/>
      <Route path='/edit/:id' element={<EditUsers/>}/>
     </Routes>
    </div>
  );
}
export default App;