
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar';
import Userlist from './Component/Userlist';
import Admin from './Page/Admin';
import Erreur from './Page/Erreur';
import Home from './Page/Home';
import Profile from './Page/Profile';


function App() {
  const [isAuth, setIsAuth] = useState(false)

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
       
        {isAuth ? < Route exact path='/Admin' element={<Admin/>} /> :   <Route exact path='/*' element={<Erreur/>} /> }
        
        <Route exact path='/Profile/:id' element={<Profile/>} />
        <Route exact path='/User' element={<Userlist/>} />
      </Routes>
    </div>
  );
}

export default App;
