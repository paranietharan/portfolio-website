import React from 'react';
import { ExternalLink, Github, Smartphone, Globe, Server, Cpu, Link, ShoppingCart } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'E-commerce Microservice Backend (Go)',
      description: 'A scalable e-commerce backend built with Go microservices architecture, featuring distributed services and modern backend practices.',
      longDescription: 'Developed a comprehensive e-commerce backend using Go with microservices architecture. Implemented distributed services for user management, product catalog, order processing, and payment handling with proper service communication and data consistency.',
      technologies: ['Go', 'Gin Framework', 'Microservices', 'Docker', 'PostgreSQL', 'Redis'],
      icon: <ShoppingCart className="w-8 h-8" />,
      highlights: ['Microservices architecture', 'Distributed services', 'Service communication', 'Data consistency', 'Scalable design'],
      github: 'https://github.com/paranietharan/ecom-go-micro-service-backend',
      demo: null,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Go-Gin URL Shortener Backend',
      description: 'A high-performance URL shortening service built with Go and Gin framework, featuring fast redirects and analytics.',
      longDescription: 'Built a robust URL shortening service using Go and the Gin web framework. Implemented efficient URL encoding/decoding algorithms, caching mechanisms, and analytics tracking for shortened URLs with high-performance redirects.',
      technologies: ['Go', 'Gin Framework', 'Redis', 'PostgreSQL', 'Docker'],
      icon: <Link className="w-8 h-8" />,
      highlights: ['High-performance redirects', 'URL analytics', 'Caching mechanisms', 'Efficient algorithms', 'RESTful API'],
      github: 'https://github.com/paranietharan/go-gin-url-shortener-backend',
      demo: null,
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Aora - AI-Generated Educational Content Sharing App',
      description: 'A React Native application focused on AI-generated educational content sharing with user-friendly interface and accessibility features.',
      longDescription: 'Built a comprehensive mobile application using React Native and Nativewind for styling. Integrated Appwrite for backend services including user authentication, database management, and real-time synchronization. The app features a clean, accessible interface designed for educational content creators and learners.',
      technologies: ['React Native', 'Nativewind', 'Appwrite', 'JavaScript'],
      icon: <Smartphone className="w-8 h-8" />,
      highlights: ['Backend functionalities', 'User authentication', 'Database management', 'Real-time sync', 'Accessibility focused'],
      github: 'https://github.com/Paranietharan/aora-app',
      demo: null,
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'E-commerce Microservice Platform',
      description: 'A scalable e-commerce platform built with microservices architecture, featuring payment gateway integration and optimized performance.',
      longDescription: 'Developed a complete e-commerce solution using React for the frontend and Spring Boot with Node.js for microservices. Implemented secure payment gateway integration and achieved 40% reduction in page load time through database optimization and caching strategies.',
      technologies: ['React', 'Spring Boot', 'Node.js', 'MySQL', 'Docker'],
      icon: <Globe className="w-8 h-8" />,
      highlights: ['Payment gateway integration', 'Microservices architecture', '40% faster load times', 'Secure authentication'],
      github: 'https://github.com/Paranietharan/ecommerce-platform',
      demo: null,
      color: 'from-indigo-500 to-blue-600'
    },
    {
      title: 'Web-based Library Management System',
      description: 'A comprehensive library management system with real-time features and cloud deployment, reducing manual effort by 40%.',
      longDescription: 'Created a full-featured library management system using React.js and Spring Boot with WebSocket integration for real-time updates. Deployed on Azure cloud platform with automated processes that reduced manual administrative effort by 40%.',
      technologies: ['React.js', 'Spring Boot', 'WebSockets', 'MySQL', 'Azure'],
      icon: <Server className="w-8 h-8" />,
      highlights: ['Real-time updates', 'Cloud deployment', '40% less manual effort', 'Automated processes'],
      github: 'https://github.com/Paranietharan/library-management',
      demo: null,
      color: 'from-teal-500 to-green-600'
    },
    {
      title: 'Automatic Sandwich Making Machine',
      description: 'An innovative Arduino-based sandwich making machine with 90% precision rate and real-time monitoring interface.',
      longDescription: 'Designed and built an automated sandwich making machine using Arduino microcontrollers, sensors, and motors. Achieved 90% precision rate in ingredient dispensing with a web-based monitoring interface for real-time status tracking and control.',
      technologies: ['Arduino', 'C++', 'Sensors', 'Motors', 'Web Interface'],
      icon: <Cpu className="w-8 h-8" />,
      highlights: ['90% precision rate', 'Real-time monitoring', 'Automated dispensing', 'Hardware integration'],
      github: 'https://github.com/Paranietharan/sandwich-machine',
      demo: null,
      color: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills in full-stack development, 
              backend services, mobile applications, and innovative solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
              >
                <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
                
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${project.color} text-white`}>
                      {project.icon}
                    </div>
                    <div className="flex space-x-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                        >
                          <Github size={20} />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <div
                          key={highlightIndex}
                          className="flex items-center text-sm text-gray-600 dark:text-gray-300"
                        >
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="w-full py-3 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors font-medium">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://github.com/Paranietharan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <Github size={20} className="mr-2" />
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;