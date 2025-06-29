import React from 'react';
import { ArrowDown, Download, Github, Linkedin, Mail, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <div className="mb-6">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 p-1">
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                  <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">PP</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                Paranietharan{' '}
                <span className="text-blue-600 dark:text-blue-400">Palasuntharam</span>
              </h1>
              <div className="flex items-center justify-center mb-4 text-gray-600 dark:text-gray-300">
                <MapPin size={18} className="mr-2" />
                <span>Kilinochchi, Northern Province, Sri Lanka</span>
              </div>
            </div>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Aspiring <span className="text-blue-600 dark:text-blue-400 font-semibold">Software Developer</span> with experience in{' '}
              <span className="text-indigo-600 dark:text-indigo-400 font-semibold">full-stack development</span> and{' '}
              <span className="text-teal-600 dark:text-teal-400 font-semibold">microservices architecture</span>
            </p>

            <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
              Skilled in building scalable web and mobile applications using React.js, React Native, Spring Boot, and Docker. 
              Seeking opportunities to contribute innovative solutions and grow in collaborative environments.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center">
                <Download size={20} className="mr-2" />
                Download Resume
              </button>
              <div className="flex items-center space-x-4">
                <a
                  href="mailto:paranietharan20@gmail.com"
                  className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <Mail size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/paranietharan-palasuntharam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com/Paranietharan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>

            <div className="animate-bounce-subtle">
              <button
                onClick={scrollToAbout}
                className="text-gray-400 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <ArrowDown size={32} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;