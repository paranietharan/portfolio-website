import React from 'react';
import { Mail, Phone, Github, Linkedin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-8 h-8" />,
      label: 'Email',
      value: 'paranietharan20@gmail.com',
      href: 'mailto:paranietharan20@gmail.com',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Phone className="w-8 h-8" />,
      label: 'Phone',
      value: '+94 769 701 039',
      href: 'tel:+94769701039',
      color: 'from-green-500 to-green-600'
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      href: 'https://github.com/Paranietharan',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/paranietharan-palasuntharam',
      color: 'hover:text-blue-600'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Let's Connect
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Ready to discuss opportunities, collaborate on projects, or just have a conversation about technology? 
              I'd love to hear from you.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {contactInfo.map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                className="group block bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
              >
                <div className="text-center">
                  <div className={`w-20 h-20 bg-gradient-to-r ${contact.color} rounded-full flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {contact.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {contact.label}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {contact.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="text-center mb-12">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Follow My Work
            </h3>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 text-gray-600 dark:text-gray-400 ${social.color} transform hover:scale-110`}
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 text-white">
              <div className="flex items-center justify-center mb-4">
                <Send className="w-8 h-8 mr-3" />
                <h3 className="text-2xl font-bold">
                  Ready to Work Together?
                </h3>
              </div>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                I'm actively seeking opportunities to contribute to innovative projects and grow as a software developer. 
                Let's discuss how I can add value to your team.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="mailto:paranietharan20@gmail.com"
                  className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg transform hover:scale-105"
                >
                  Send Email
                </a>
                <a
                  href="tel:+94769701039"
                  className="px-8 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors shadow-lg transform hover:scale-105"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;