import React from 'react';
import About from './pages/About';


import Contact from './pages/Contact';
import Courses from './pages/Courses';
import Home from './pages/Home';
import Skill from './pages/Skill'
import Nav from './component/Nav';
import Footer from './component/Footer';
import AdminFeedback from './pages/AdminFeedback.jsx';
import { Routes,Route } from 'react-router-dom';
import NotFound from './pages/NotFound';

function App() {
  const name = import.meta.env.VITE_ADMIN_ROUTE;
  return (
    <div > 
    <Nav />
    <main className="flex-grow">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/Skill" element={<Skill/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/AboutUS" element={<About/>} />
        <Route path={`/${name}`} element={<AdminFeedback />} />

        <Route path="*" element={<NotFound />} />




      </Routes>
    </main>
    <Footer />
  </div>
  );
}

export default App;
