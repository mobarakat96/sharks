import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import WhySocial from './components/WhySocial';
import Pricing from './components/Pricing';
import Process from './components/Process';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-right" dir="rtl">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <WhySocial />
        <Pricing />
        <Process />
      </main>
      <Footer />
    </div>
  );
}

export default App;