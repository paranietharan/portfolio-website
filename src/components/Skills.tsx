import React from 'react';
import { Code, Database, Cloud, Globe, Server, Layers } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="w-8 h-8" />,
      skills: [
        { 
          name: 'Python', 
          icon: '🐍',
          description: 'Data science, automation, and backend development'
        },
        { 
          name: 'Go', 
          icon: '🔷',
          description: 'High-performance backend services and microservices'
        },
        { 
          name: 'Java', 
          icon: '☕',
          description: 'Enterprise applications with Spring Boot framework'
        }
      ],
      gradient: 'from-blue-500 via-purple-500 to-pink-500'
    },
    {
      title: 'Frontend Development',
      icon: <Globe className="w-8 h-8" />,
      skills: [
        { 
          name: 'React.js', 
          icon: '⚛️',
          description: 'Modern web applications with component-based architecture'
        }
      ],
      gradient: 'from-cyan-500 via-blue-500 to-indigo-500'
    },
    {
      title: 'Cloud Platforms',
      icon: <Cloud className="w-8 h-8" />,
      skills: [
        { 
          name: 'AWS', 
          icon: '☁️',
          description: 'Amazon Web Services for scalable cloud solutions'
        },
        { 
          name: 'GCP', 
          icon: '🌐',
          description: 'Google Cloud Platform for modern cloud infrastructure'
        }
      ],
      gradient: 'from-orange-500 via-red-500 to-pink-500'
    },
    {
      title: 'Databases',
      icon: <Database className="w-8 h-8" />,
      skills: [
        { 
          name: 'MongoDB', 
          icon: '🍃',
          description: 'NoSQL document database for flexible data storage'
        },
        { 
          name: 'Redis', 
          icon: '🔴',
          description: 'In-memory data structure store for caching and sessions'
        },
        { 
          name: 'MySQL', 
          icon: '🐬',
          description: 'Relational database for structured data management'
        },
        { 
          name: 'PostgreSQL', 
          icon: '🐘',
          description: 'Advanced relational database with powerful features'
        },
        { 
          name: 'MS SQL', 
          icon: '🗄️',
          description: 'Microsoft SQL Server for enterprise database solutions'
        }
      ],
      gradient: 'from-green-500 via-teal-500 to-cyan-500'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Technical Skills
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Technologies and tools I use to build scalable, modern applications
            </p>
          </div>

          <div className="grid gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-8">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${category.gradient} text-white mr-4 shadow-lg`}>
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
                    >
                      <div className="flex items-center mb-4">
                        <span className="text-3xl mr-3">{skill.icon}</span>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                          {skill.name}
                        </h4>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills Overview */}
          <div className="mt-16">
            <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-2xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Development Expertise
                </h3>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Specialized in building scalable applications with modern architectures
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    <Server className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Backend Development
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Microservices, APIs, and scalable server architecture
                  </p>
                </div>
                
                <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    <Globe className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Full-Stack Development
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    End-to-end application development and deployment
                  </p>
                </div>
                
                <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    <Layers className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    System Architecture
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Designing scalable and maintainable software systems
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;