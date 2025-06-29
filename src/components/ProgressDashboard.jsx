import React from 'react';
import { BarChart3, TrendingUp, Award, Clock, Users, Target, Brain, Zap } from 'lucide-react';

const ProgressDashboard = () => {
  const metrics = [
    { 
      icon: Brain, 
      title: 'AI Analytics', 
      description: 'Advanced neural network analysis of learning patterns and cognitive development',
      value: '99.7%',
      label: 'AI Accuracy',
      gradient: 'from-cyan-500 to-blue-600'
    },
    { 
      icon: TrendingUp, 
      title: 'Quantum Progress', 
      description: 'Real-time curriculum advancement tracking with predictive learning algorithms',
      value: '87%',
      label: 'Mastery Level',
      gradient: 'from-green-500 to-emerald-600'
    },
    { 
      icon: Award, 
      title: 'Digital Achievements', 
      description: 'Blockchain-verified skill certifications and learning milestone recognition',
      value: '42',
      label: 'NFT Badges',
      gradient: 'from-purple-500 to-violet-600'
    },
    { 
      icon: Zap, 
      title: 'Neural Engagement', 
      description: 'Biometric learning optimization and cognitive load balancing systems',
      value: '18.2h',
      label: 'Focus Time',
      gradient: 'from-orange-500 to-red-600'
    },
  ];

  const recentActivity = [
    { subject: 'Quantum Math', activity: 'Completed Advanced Calculus Simulation', score: '98%', time: '12 minutes ago', color: 'from-blue-500 to-cyan-600' },
    { subject: 'AI English', activity: 'Generated Creative Story with GPT Integration', score: '94%', time: '1 hour ago', color: 'from-green-500 to-emerald-600' },
    { subject: 'Neural Computing', activity: 'Built Machine Learning Model', score: '96%', time: '3 hours ago', color: 'from-purple-500 to-violet-600' },
    { subject: 'Logic Reasoning', activity: 'Solved Quantum Logic Puzzles', score: '92%', time: '1 day ago', color: 'from-orange-500 to-red-600' },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-40 left-32 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-40 right-32 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-pink-500/30 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-cyan-500/30">
            <Brain className="h-5 w-5 text-cyan-400 mr-3 animate-pulse" />
            <span className="text-sm font-medium text-cyan-300">Advanced Learning Intelligence</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Neural Analytics
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Dashboard
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Revolutionary AI-powered tracking system providing deep insights into learning patterns, 
            cognitive development, and educational progress optimization.
          </p>
        </div>

        {/* Hero Analytics Section */}
        <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/50 backdrop-blur-lg rounded-3xl p-12 mb-20 border border-purple-500/20 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold mb-8">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  AI-Powered Learning Intelligence
                </span>
              </h3>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                Our quantum-enhanced analytics engine processes millions of data points to create 
                personalized learning experiences that adapt in real-time to each student's unique cognitive patterns.
              </p>
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">1M+</div>
                  <div className="text-cyan-300 text-sm font-medium">Neural Connections</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">50K+</div>
                  <div className="text-green-300 text-sm font-medium">AI Students</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">99.8%</div>
                  <div className="text-purple-300 text-sm font-medium">Success Rate</div>
                </div>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-cyan-400/30">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20"></div>
              <img 
                src="https://images.pexels.com/photos/8613103/pexels-photo-8613103.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Student using advanced AI learning dashboard"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
              
              {/* Floating UI Elements */}
              <div className="absolute top-4 left-4 bg-gradient-to-r from-cyan-500 to-purple-600 px-4 py-2 rounded-full text-white text-sm font-medium animate-pulse">
                AI Processing
              </div>
              <div className="absolute bottom-4 right-4 bg-gradient-to-r from-green-500 to-cyan-600 px-4 py-2 rounded-full text-white text-sm font-medium">
                Neural Active
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <div key={index} className="group relative bg-gradient-to-br from-slate-800/50 to-purple-900/50 backdrop-blur-lg rounded-2xl p-8 text-center border border-purple-500/20 hover:border-cyan-400/50 transition-all duration-500 hover:transform hover:scale-105 shadow-lg hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-purple-900/20 group-hover:to-cyan-900/20 transition-all duration-500 rounded-2xl"></div>
                
                <div className={`relative bg-gradient-to-br ${metric.gradient} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse shadow-lg`}>
                  <IconComponent className="h-10 w-10 text-white" />
                </div>
                
                <div className="relative">
                  <div className="text-4xl font-bold text-white mb-2">{metric.value}</div>
                  <div className="text-sm text-cyan-300 mb-4 font-medium">{metric.label}</div>
                  <h4 className="font-bold text-white mb-4 text-lg">{metric.title}</h4>
                  <p className="text-sm text-gray-300 leading-relaxed">{metric.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Activity & Resources Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Recent Activity */}
          <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/50 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 shadow-lg">
            <h3 className="text-3xl font-bold text-white mb-8">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Neural Activity Feed
              </span>
            </h3>
            <div className="space-y-6">
              {recentActivity.map((activity, index) => (
                <div key={index} className="group bg-gradient-to-r from-slate-700/50 to-purple-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-102">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-3">
                        <div className={`bg-gradient-to-r ${activity.color} px-4 py-2 rounded-full`}>
                          <span className="text-sm font-bold text-white">{activity.subject}</span>
                        </div>
                        <h4 className="font-semibold text-white text-lg">{activity.activity}</h4>
                      </div>
                      <p className="text-sm text-gray-400">{activity.time}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">{activity.score}</div>
                      <div className="text-sm text-gray-400">Neural Score</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Teacher Tools */}
          <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/50 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 shadow-lg">
            <h3 className="text-3xl font-bold text-white mb-8">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                AI Teacher Hub
              </span>
            </h3>
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-4 rounded-xl shadow-lg">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-3 text-xl">Neural Classroom</h4>
                  <p className="text-sm text-gray-300 leading-relaxed">AI-powered student monitoring with real-time cognitive load analysis and personalized intervention systems</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="bg-gradient-to-br from-purple-500 to-violet-600 p-4 rounded-xl shadow-lg">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-3 text-xl">Quantum Curriculum</h4>
                  <p className="text-sm text-gray-300 leading-relaxed">Advanced curriculum mapping with AI-generated lesson plans and adaptive learning pathway optimization</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="bg-gradient-to-br from-orange-500 to-red-600 p-4 rounded-xl shadow-lg">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-3 text-xl">Predictive Analytics</h4>
                  <p className="text-sm text-gray-300 leading-relaxed">Machine learning-powered assessment reports with future performance predictions and intervention recommendations</p>
                </div>
              </div>
            </div>
            
            <button className="w-full mt-10 bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-4 px-8 rounded-xl font-bold text-lg hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105">
              <Brain className="inline-block w-6 h-6 mr-3" />
              Access AI Portal
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgressDashboard;