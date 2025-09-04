import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, Calendar, Briefcase, Code } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Let's Work Together
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I'm always interested in discussing new opportunities, innovative projects,
              and potential collaborations. Feel free to reach out!
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Email Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 dark:border-gray-700 group">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Email Me
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm">
                  For project inquiries and professional opportunities
                </p>
                <a
                  href="mailto:paranietharan20@gmail.com"
                  className="inline-block text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                >
                  paranietharan20@gmail.com
                </a>
                <div className="mt-6">
                  <a
                    href="mailto:paranietharan20@gmail.com"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Email
                  </a>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 dark:border-gray-700 group">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Call Me
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm">
                  Available for direct conversations and consultations
                </p>
                <a
                  href="tel:+94769701039"
                  className="inline-block text-green-600 dark:text-green-400 font-semibold hover:text-green-700 dark:hover:text-green-300 transition-colors duration-200"
                >
                  +94 769 701 039
                </a>
                <div className="mt-6">
                  <a
                    href="tel:+94769701039"
                    className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Skills</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Go, Python, React, Node.js<br />Docker, SQL, Cloud (AWS/GCP)
                </p>
              </div>

              <div>
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Availability</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Open to opportunities<br />Remote & On-site
                </p>
              </div>

              <div>
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Interests</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Full-Stack Development<br />Software Architecture
                </p>
              </div>
            </div>
          </div>


          {/* Social Links */}
          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Connect with me on social platforms
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/Paranietharan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/paranietharan-palasuntharam"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:scale-110 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;