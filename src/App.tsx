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
        
        {/* Footer */}
        <footer className="bg-gray-900 dark:bg-black text-white py-8">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <p className="mb-4">
                © 2024 Paranietharan Palasuntharam. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;