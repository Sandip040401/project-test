import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SubjectGrid from './components/SubjectGrid';
import ProgressDashboard from './components/ProgressDashboard';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {activeSection === 'home' && (
        <>
          <Hero />
          <SubjectGrid setActiveSection={setActiveSection} />
          <ProgressDashboard />
        </>
      )}
      
      {activeSection !== 'home' && (
        <main className="pt-24 pb-20 relative">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full opacity-20">
              <div className="absolute top-32 left-20 w-64 h-64 bg-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-32 right-20 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <button
              onClick={() => setActiveSection('home')}
              className="mb-12 flex items-center bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm text-cyan-300 hover:text-white transition-all duration-300 font-medium px-6 py-3 rounded-xl border border-cyan-500/30 hover:border-cyan-400/50"
            >
              ← Back to Neural Hub
            </button>
            
            <div className="text-center py-24">
              <h2 className="text-5xl md:text-7xl font-bold mb-8">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)} AI Learning
                </span>
              </h2>
              
              <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Revolutionary curriculum powered by quantum computing and neural networks, 
                designed for the next generation of digital natives.
              </p>
              
              <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/50 backdrop-blur-lg rounded-3xl shadow-2xl border border-purple-500/20 p-12 max-w-2xl mx-auto">
                <div className="mb-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 animate-pulse">
                    <span className="text-3xl">🚀</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Neural Learning Modules Initializing</h3>
                  <p className="text-gray-300 mb-8">
                    Advanced AI-powered interactive lessons are being calibrated for optimal learning experiences. 
                    Our quantum processors are preparing personalized curriculum pathways.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl p-6 border border-cyan-500/30">
                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-200"></div>
                    <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse delay-400"></div>
                  </div>
                  <p className="text-cyan-300 font-medium">AI Neural Networks Loading...</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}
      
      <Footer />
    </div>
  );
}

export default App;