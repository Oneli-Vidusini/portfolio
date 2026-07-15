import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import MouseGlow from './components/MouseGlow';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <MouseGlow />

      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loader" onComplete={() => setLoading(false)} />
        ) : (
          <div key="portfolio" className="bg-bg-dark text-gray-150 min-h-screen relative font-sans overflow-x-hidden">
            {/* Header navbar Navigation */}
            <Navbar />
            
            {/* Main Sections */}
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Timeline />
              <Education />
              <Certifications />
              <Contact />
            </main>

            {/* Simple Footer */}
            <Footer />
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
