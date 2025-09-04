import React from 'react';
import { Code, Database, Smartphone, Cloud} from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Full-Stack Development',
      description: 'Experienced in building end-to-end web applications using modern technologies like React.js, Go, and Spring Boot.'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile Development',
      description: 'Proficient in creating cross-platform mobile applications using React Native and Flutter.'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Backend Services',
      description: 'Skilled in designing microservices and APIs with Go, Spring Boot, and database optimization.'
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud & DevOps',
      description: 'Experience with Docker containerization and deployment on AWS and Azure cloud platforms.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              I'm a passionate Information Technology student at the University of Moratuwa, 
              dedicated to creating innovative software solutions that make a difference.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-slide-up">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                My Journey
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Currently pursuing my BSc.(Hons) in Information Technology at the University of Moratuwa, 
                I've developed a strong foundation in software engineering principles and practical experience 
                in full-stack development.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                My passion lies in creating scalable applications that solve real-world problems. I've worked 
                on various projects ranging from e-commerce platforms to AI-powered educational tools, 
                always focusing on user experience and performance optimization.
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                  Tamil (Native)
                </span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                  English (Working Proficiency)
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="text-blue-600 dark:text-blue-400 mb-4">
                    {highlight.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {highlight.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Personal Interests
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['Traveling', 'Photography', 'Music', 'Technology', 'Innovation'].map((interest, index) => (
                <div
                  key={index}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  {interest}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;