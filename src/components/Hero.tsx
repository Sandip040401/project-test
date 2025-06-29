import React from 'react';
import { CheckCircle, Users, BookOpen, Award, Sparkles, Rocket, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-cyan-500/30">
              <Sparkles className="h-5 w-5 text-cyan-400 mr-3 animate-pulse" />
              <span className="text-sm font-medium text-cyan-300">
                AI-Powered • Ages 5-16 • Trusted by 50,000+ Students Globally
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                The Future of
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                Learning is Here
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Revolutionary AI-powered educational platform delivering personalized Mathematics, English, 
              Reasoning, Computing, and AI Learning experiences that adapt to every student's unique journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <button className="group relative bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 shadow-2xl shadow-purple-500/25 transform hover:scale-105">
                <Rocket className="inline-block w-6 h-6 mr-3 group-hover:animate-bounce" />
                Launch Learning Journey
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className="group border-2 border-cyan-400/50 text-cyan-300 px-10 py-5 rounded-2xl font-bold text-lg hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 backdrop-blur-sm">
                <Zap className="inline-block w-6 h-6 mr-3 group-hover:animate-pulse" />
                Experience Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 text-sm text-gray-400">
              <div className="flex items-center">
                <Award className="h-5 w-5 text-yellow-400 mr-2 animate-pulse" />
                <span>AI Excellence Award 2024</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                <span>Privacy Certified</span>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-purple-500/30">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20"></div>
              <img 
                src="https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Students using futuristic learning technology"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -bottom-8 -left-8 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl shadow-2xl p-8 border border-cyan-400/30 backdrop-blur-lg">
              <div className="text-3xl font-bold text-white">99.2%</div>
              <div className="text-sm text-cyan-200">AI Accuracy Rate</div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-ping"></div>
            </div>
            
            <div className="absolute -top-8 -right-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl shadow-2xl p-8 border border-purple-400/30 backdrop-blur-lg">
              <div className="text-3xl font-bold text-white">1M+</div>
              <div className="text-sm text-purple-200">Learning Sessions</div>
              <Sparkles className="absolute -top-1 -right-1 w-5 h-5 text-yellow-400 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          <div className="group bg-gradient-to-br from-slate-800/50 to-purple-900/50 backdrop-blur-lg rounded-2xl p-8 text-center border border-purple-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse">
              <Users className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">AI-Powered Tutoring</h3>
            <p className="text-gray-300 leading-relaxed">Advanced artificial intelligence adapts to each student's learning style and pace</p>
          </div>
          
          <div className="group bg-gradient-to-br from-slate-800/50 to-purple-900/50 backdrop-blur-lg rounded-2xl p-8 text-center border border-purple-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse">
              <BookOpen className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Immersive Curriculum</h3>
            <p className="text-gray-300 leading-relaxed">Interactive 3D learning environments with gamified educational experiences</p>
          </div>
          
          <div className="group bg-gradient-to-br from-slate-800/50 to-purple-900/50 backdrop-blur-lg rounded-2xl p-8 text-center border border-purple-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse">
              <CheckCircle className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Real-Time Analytics</h3>
            <p className="text-gray-300 leading-relaxed">Instant feedback and comprehensive progress tracking with predictive insights</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;