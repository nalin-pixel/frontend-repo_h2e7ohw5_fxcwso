import React from 'react';
import Navbar from './components/Navbar.jsx';
import AnimatedHero from './components/AnimatedHero.jsx';
import Courses from './components/Courses.jsx';
import Benefits from './components/Benefits.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-sky-50 to-white text-slate-800">
      <Navbar />
      <main>
        <AnimatedHero />
        <Benefits />
        <Courses />
      </main>
      <Footer />
    </div>
  );
}

export default App;
