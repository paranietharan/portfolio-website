import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  const educationData = [
    {
      institution: 'University of Moratuwa',
      degree: 'BSc.(Hons) in Information Technology',
      location: 'Colombo, Sri Lanka',
      period: 'June 2022 - Present',
      description: 'Focused on software engineering, database systems, and modern web technologies.',
      highlights: [
        'Data Structures & Algorithms',
        'Software Engineering Principles',
        'Database Management Systems',
        'Web Application Development',
        'Mobile Application Development',
        'Cloud Computing & DevOps'
      ]
    },
    {
      institution: 'Kn/Kilinochchi Maha Vidyalayam',
      degree: 'Advanced Level',
      location: 'Kilinochchi, Sri Lanka',
      period: 'May 2018 - Nov 2020',
      description: 'Completed Advanced Level education with focus on Science and Mathematics.',
      highlights: [
        'Mathematics',
        'Physics',
        'Information Communication Technology'
      ]
    },
    {
      institution: 'Kn/Thiruvaiaru Maha Vidyalayam',
      degree: 'Ordinary Level',
      location: 'Kilinochchi, Sri Lanka',
      period: 'Jan 2006 - Dec 2017',
      description: 'Completed foundational education with strong academic performance.',
      highlights: [
        'Mathematics',
        'Science',
        'English',
        'Information Technology'
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Education
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              My academic journey has provided me with a strong foundation in computer science 
              and practical skills in modern software development.
            </p>
          </div>

          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {edu.institution}
                        </h3>
                      </div>
                      <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                        {edu.degree}
                      </h4>
                      <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 dark:text-gray-300 mb-4 space-y-1 sm:space-y-0 sm:space-x-4">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span className="text-sm">{edu.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span className="text-sm">{edu.period}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">
                      Key Subjects & Areas of Study
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((highlight, highlightIndex) => (
                        <span
                          key={highlightIndex}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="h-1 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;