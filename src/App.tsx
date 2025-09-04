import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 font-inter">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Skills />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;