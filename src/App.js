import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import CommunityContainer from './components/Community/CommunityContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Home from './components/Home/Home';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

function App(props) {

  return (

    <div className='app-wrapper'>
      <Navbar />
      <Routes>
        <Route path='/home/*' element={<Home />} />

        <Route path='/community/*' element={<CommunityContainer />} />

        <Route path='/profile/*' element={<Profile />} />

        <Route path='/dialogs/*' element={<DialogsContainer />} />

        <Route path='/music/*' element={<Music />} />

      </Routes>
      
    </div>

  );
}

export default App;
