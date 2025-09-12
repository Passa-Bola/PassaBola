import { Routes, Route } from 'react-router-dom';

import './css/style.css';

import HomePage from './pages/Home.jsx';
import TeamPage from './pages/Team.jsx';
import PassaBolaPage from './pages/PassaBola.jsx';
import ToPlayPage from './pages/ToPlay.jsx';
import ProfilePage from './pages/Profile.jsx';
import Notifications from './pages/Notifications.jsx';

import NavBar from './components/NavBAr.jsx';


function App() {

  return (
    <>
      <Routes>
        <Route path="/Home" element={<HomePage />} />
        <Route path="/Team" element={<TeamPage />} />
        <Route path="/PassaBola" element={<PassaBolaPage />} />
        <Route path="/ToPlay" element={<ToPlayPage />} />
        <Route path="/Profile" element={<ProfilePage />} />
        <Route path="/Notifications" element={<Notifications />} />
      </Routes>
      <NavBar />
    </>
  )
}

export default App
