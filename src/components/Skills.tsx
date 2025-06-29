import React from 'react';
import { Code, Database, Smartphone, Cloud, Server, Globe, CheckCircle } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: 'Go', proficiency: 'Advanced' },
        { name: 'JavaScript', proficiency: 'Advanced' },
        { name: 'Java', proficiency: 'Advanced' },
        { name: 'Python', proficiency: 'Intermediate' },
        { name: 'C++', proficiency: 'Intermediate' },
        { name: 'C', proficiency: 'Intermediate' }
      ],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      title: 'Backend Development',
      icon: <Server className="w-6 h-6" />,
      skills: [
        { name: 'Go/Gin Framework', proficiency: 'Advanced' },
        { name: 'Microservices', proficiency: 'Advanced' },
        { name: 'REST APIs', proficiency: 'Advanced' },
        { name: 'Spring Boot', proficiency: 'Intermediate' },
        { name: 'Node.js', proficiency: 'Intermediate' }
      ],
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50 dark:bg-indigo-900/20'
    },
    {
      title: 'Web Development',
      icon: <Globe className="w-6 h-6" />,
      skills: [
        { name: 'React.js', proficiency: 'Advanced' },
        { name: 'CSS/Tailwind', proficiency: 'Advanced' },
        { name: 'HTML5', proficiency: 'Expert' },
        { name: 'TypeScript', proficiency: 'Intermediate' }
      ],
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    },
    {
      title: 'Mobile Development',
      icon: <Smartphone className="w-6 h-6" />,
      skills: [
        { name: 'React Native', proficiency: 'Advanced' },
        { name: 'Flutter', proficiency: 'Intermediate' }
      ],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    },
    {
      title: 'Databases',
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: 'PostgreSQL', proficiency: 'Advanced' },
        { name: 'MySQL', proficiency: 'Advanced' },
        { name: 'Redis', proficiency: 'Intermediate' },
        { name: 'MongoDB', proficiency: 'Intermediate' }
      ],
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20'
    },
    {
      title: 'DevOps & Cloud',
      icon: <Cloud className="w-6 h-6" />,
      skills: [
        { name: 'Docker', proficiency: 'Advanced' },
        { name: 'Git/GitHub', proficiency: 'Expert' },
        { name: 'AWS', proficiency: 'Intermediate' },
        { name: 'Azure', proficiency: 'Intermediate' }
      ],
      color: 'from-teal-500 to-teal-600',
      bgColor: 'bg-teal-50 dark:bg-teal-900/20'
    }
  ];

  const getProficiencyColor = (proficiency: string) => {
    switch (proficiency) {
      case 'Expert':
        return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300';
      case 'Advanced':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Technical Skills
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              My technical expertise spans across various programming languages, frameworks, 
              and tools essential for modern software development.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border-l-4 border-transparent hover:border-current"
                style={{ borderLeftColor: `var(--tw-gradient-from, ${category.color.split(' ')[1]})` }}
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 bg-gradient-to-r ${category.color} text-white rounded-lg mr-4`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className={`p-3 rounded-lg ${category.bgColor} border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-200`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          <span className="font-medium text-gray-900 dark:text-white">
                            {skill.name}
                          </span>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getProficiencyColor(skill.proficiency)}`}>
                          {skill.proficiency}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Core Competencies
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Full-Stack Development',
                  description: 'End-to-end application development with modern tech stack',
                  icon: <Globe className="w-8 h-8" />,
                  color: 'from-blue-500 to-indigo-600'
                },
                {
                  title: 'Backend Architecture',
                  description: 'Microservices design and scalable system architecture',
                  icon: <Server className="w-8 h-8" />,
                  color: 'from-green-500 to-teal-600'
                },
                {
                  title: 'Problem Solving',
                  description: 'Analytical thinking and efficient solution implementation',
                  icon: <Code className="w-8 h-8" />,
                  color: 'from-purple-500 to-pink-600'
                }
              ].map((competency, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${competency.color} rounded-full flex items-center justify-center text-white mx-auto mb-4`}>
                    {competency.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {competency.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {competency.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Always Learning
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                I believe in continuous learning and staying updated with the latest technologies. 
                Currently exploring advanced Go patterns, cloud-native architectures, and modern DevOps practices.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {['Kubernetes', 'GraphQL', 'gRPC', 'Terraform'].map((tech, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600"
                  >
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                      Learning: {tech}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;