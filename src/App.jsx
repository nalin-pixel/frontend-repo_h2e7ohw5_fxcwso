import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Courses from './components/Courses.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-sky-50 to-white text-slate-800">
      <Navbar />
      <main>
        <Hero />
        <Courses />
      </main>
      <Footer />
    </div>
  );
}

export default App;
