import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import CommunityContainer from './components/Community/CommunityContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Home from './components/Home/Home';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';

function App(props) {

  return (

    <div className='app-wrapper'>
      <Navbar />
      <Routes>
        <Route path='/home/*' element={<Home />} />

        <Route path='/community/*' element={<CommunityContainer />} />

        <Route path='/profile/:id' element={<ProfileContainer />} />

        <Route path='/dialogs/*' element={<DialogsContainer />} />

        <Route path='/music/*' element={<Music />} />

      </Routes>
      
    </div>

  );
}

export default App;
