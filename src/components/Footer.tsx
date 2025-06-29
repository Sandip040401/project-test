import React from 'react';
import { Brain, Mail, Phone, MapPin, Shield, Award, Users, Sparkles, Zap } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      {/* Trust Section */}
      <div className="bg-gradient-to-r from-slate-800/50 to-purple-800/50 backdrop-blur-lg py-16 border-b border-purple-500/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-cyan-500/30">
                <Sparkles className="h-5 w-5 text-cyan-400 mr-3 animate-pulse" />
                <span className="text-sm font-medium text-cyan-300">Trusted Globally</span>
              </div>
              
              <h3 className="text-4xl font-bold mb-8">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Leading the Future of Education
                </span>
              </h3>
              
              <p className="text-gray-300 mb-10 leading-relaxed text-lg">
                Join millions of students, educators, and institutions worldwide who trust WeCareLearn 
                for revolutionary AI-powered learning experiences that prepare minds for tomorrow's challenges.
              </p>
              
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">10K+</div>
                  <div className="text-cyan-300 text-sm font-medium">AI Schools</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">1M+</div>
                  <div className="text-green-300 text-sm font-medium">Neural Students</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">99.9%</div>
                  <div className="text-purple-300 text-sm font-medium">AI Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-cyan-400/30">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20"></div>
              <img 
                src="https://images.pexels.com/photos/8613087/pexels-photo-8613087.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Students and teachers in futuristic AI-powered classroom"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
              
              {/* Floating Elements */}
              <div className="absolute top-4 left-4 bg-gradient-to-r from-cyan-500 to-purple-600 px-4 py-2 rounded-full text-white text-sm font-medium animate-pulse">
                AI Enhanced
              </div>
              <div className="absolute bottom-4 right-4 bg-gradient-to-r from-green-500 to-cyan-600 px-4 py-2 rounded-full text-white text-sm font-medium">
                Future Ready
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-4 mb-8">
                <div className="relative">
                  <div className="bg-gradient-to-br from-cyan-400 to-purple-600 p-3 rounded-xl shadow-lg">
                    <Brain className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    WeCareLearn
                  </span>
                  <span className="text-sm text-cyan-300 -mt-1 font-medium">Future of Education</span>
                </div>
              </div>
              
              <p className="text-gray-300 mb-8 leading-relaxed">
                Revolutionary AI-powered educational platform delivering next-generation learning experiences 
                aligned with global standards and preparing students for the digital future.
              </p>
              
              <div className="flex space-x-4">
                <div className="bg-gradient-to-br from-yellow-500 to-orange-600 p-3 rounded-xl shadow-lg">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-3 rounded-xl shadow-lg">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div className="bg-gradient-to-br from-blue-500 to-cyan-600 p-3 rounded-xl shadow-lg">
                  <Users className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>

            {/* Curriculum */}
            <div>
              <h3 className="font-bold mb-8 text-xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                AI Curriculum Areas
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li><a href="#" className="hover:text-cyan-400 transition-colors flex items-center">
                  <Zap className="h-4 w-4 mr-2 text-cyan-400" />
                  Quantum Mathematics (K-16)
                </a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors flex items-center">
                  <Zap className="h-4 w-4 mr-2 text-green-400" />
                  Neural Language Arts
                </a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors flex items-center">
                  <Zap className="h-4 w-4 mr-2 text-purple-400" />
                  Advanced Reasoning AI
                </a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors flex items-center">
                  <Zap className="h-4 w-4 mr-2 text-orange-400" />
                  Quantum Computing
                </a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors flex items-center">
                  <Zap className="h-4 w-4 mr-2 text-pink-400" />
                  Future Tech & AI
                </a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors flex items-center">
                  <Zap className="h-4 w-4 mr-2 text-indigo-400" />
                  Neural Assessment Tools
                </a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-bold mb-8 text-xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Future Resources
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Global AI Standards</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Quantum Curriculum Framework</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Neural Teacher Training</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">AI Parent Dashboard</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Future Skills Development</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Quantum Research Lab</a></li>
              </ul>
            </div>

            {/* Contact & Compliance */}
            <div>
              <h3 className="font-bold mb-8 text-xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Global Network
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3 flex-shrink-0 text-cyan-400" />
                  <span>London, UK | Silicon Valley, US</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 flex-shrink-0 text-purple-400" />
                  <span>ai@wecarelearn.edu</span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 flex-shrink-0 text-green-400" />
                  <span>+44 20 AI-LEARN</span>
                </li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors flex items-center">
                  <Shield className="h-5 w-5 mr-3 flex-shrink-0 text-yellow-400" />
                  Quantum Security Protocol
                </a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Neural Privacy Standards</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">AI Ethics Compliance</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-purple-500/20 pt-12">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 mb-6 md:mb-0">
                <p>&copy; 2024 WeCareLearn Future Education. Quantum Learning Provider (UK: AI-12345678 | US: Neural-EIN 12-3456789)</p>
                <p className="mt-2 text-sm">Certified by Global AI Education Council • Quantum ISO 50001 Certified • Neural Safety Approved</p>
              </div>
              <div className="flex items-center space-x-6">
                <div className="relative">
                  <img src="https://images.pexels.com/photos/8613091/pexels-photo-8613091.jpeg?auto=compress&cs=tinysrgb&w=100" alt="AI Excellence Award" className="w-16 h-16 rounded-full border-2 border-cyan-400" />
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                    <Sparkles className="w-3 h-3 text-white" />
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    AI Excellence 2024
                  </div>
                  <div className="text-sm text-gray-400">Future Education Technology</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;