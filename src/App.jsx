import {BrowserRouter, Routes, Route } from 'react-router-dom';

import './css/style.css';

import ChangeIcon from './hooks/ChangeIcon'
import HomePage from './pages/Home.jsx';
import TeamPage from './pages/Team.jsx';
import PassaBolaPage from './pages/PassaBola.jsx';
import ToPlayPage from './pages/ToPlay.jsx';
import ProfilePage from './pages/Profile.jsx';
import Notifications from './pages/Notifications.jsx';
import Login from './pages/Login.jsx';

function App() {

  ChangeIcon();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/Team" element={<TeamPage />} />
        <Route path="/PassaBola" element={<PassaBolaPage />} />
        <Route path="/ToPlay" element={<ToPlayPage />} />
        <Route path="/Profile" element={<ProfilePage />} />
        <Route path="/Notifications" element={<Notifications />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
