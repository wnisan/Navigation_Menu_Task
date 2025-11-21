import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import BreakingNews from './pages/BreakingNews';
import PopularNews from './pages/PopularNews';
import About from './pages/About';
import Team from './pages/Team';
import Contacts from './pages/Contacts';
import './App.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
      
        <Route path="/" element={<Layout />}>
          
          <Route index element={<Home />} />
          
          <Route path="news">
            <Route path="breaking" element={<BreakingNews />} />
            <Route path="popular" element={<PopularNews />} />
          </Route>
          
          <Route path="about">
            <Route index element={<About />} />
            <Route path="team" element={<Team />} />
            <Route path="contacts" element={<Contacts />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App
