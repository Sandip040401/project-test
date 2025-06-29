import React from 'react';
import { 
  Calculator, 
  BookOpen, 
  Brain, 
  Monitor, 
  Sparkles,
  ArrowRight,
  Zap
} from 'lucide-react';

interface SubjectGridProps {
  setActiveSection: (section: string) => void;
}

const SubjectGrid: React.FC<SubjectGridProps> = ({ setActiveSection }) => {
  const subjects = [
    {
      id: 'maths',
      title: 'Mathematics',
      description: 'AI-powered number theory, advanced algorithms, quantum mathematics and statistical modeling',
      icon: Calculator,
      gradient: 'from-blue-500 to-cyan-600',
      glowColor: 'shadow-blue-500/25',
      keyStages: 'Neural Learning • Ages 5-16',
      image: 'https://images.pexels.com/photos/8613204/pexels-photo-8613204.jpeg?auto=compress&cs=tinysrgb&w=400',
      imageAlt: 'Students exploring mathematical concepts with holographic displays'
    },
    {
      id: 'english',
      title: 'English Language Arts',
      description: 'Natural language processing, creative AI writing, literature analysis and communication mastery',
      icon: BookOpen,
      gradient: 'from-green-500 to-emerald-600',
      glowColor: 'shadow-green-500/25',
      keyStages: 'Adaptive Learning • Ages 5-16',
      image: 'https://images.pexels.com/photos/8613097/pexels-photo-8613097.jpeg?auto=compress&cs=tinysrgb&w=400',
      imageAlt: 'Interactive storytelling with AI-powered language learning'
    },
    {
      id: 'reasoning',
      title: 'Critical Reasoning',
      description: 'Advanced logic circuits, quantum thinking patterns, neural problem-solving methodologies',
      icon: Brain,
      gradient: 'from-purple-500 to-violet-600',
      glowColor: 'shadow-purple-500/25',
      keyStages: 'Cognitive Enhancement • Ages 7-16',
      image: 'https://images.pexels.com/photos/8613100/pexels-photo-8613100.jpeg?auto=compress&cs=tinysrgb&w=400',
      imageAlt: 'Students solving complex puzzles with AI assistance'
    },
    {
      id: 'computer',
      title: 'Computing & Programming',
      description: 'Quantum computing fundamentals, blockchain development, cybersecurity and system architecture',
      icon: Monitor,
      gradient: 'from-orange-500 to-red-600',
      glowColor: 'shadow-orange-500/25',
      keyStages: 'Code Mastery • Ages 6-16',
      image: 'https://images.pexels.com/photos/8613200/pexels-photo-8613200.jpeg?auto=compress&cs=tinysrgb&w=400',
      imageAlt: 'Futuristic programming environment with holographic code'
    },
    {
      id: 'ai',
      title: 'AI & Future Tech',
      description: 'Machine learning algorithms, neural networks, robotics and emerging technology innovation',
      icon: Sparkles,
      gradient: 'from-indigo-500 to-purple-600',
      glowColor: 'shadow-indigo-500/25',
      keyStages: 'Future Ready • Ages 8-16',
      image: 'https://images.pexels.com/photos/8613028/pexels-photo-8613028.jpeg?auto=compress&cs=tinysrgb&w=400',
      imageAlt: 'Students interacting with AI and robotics technology'
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-32 left-20 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-32 right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-cyan-500/30">
            <Zap className="h-5 w-5 text-cyan-400 mr-3 animate-pulse" />
            <span className="text-sm font-medium text-cyan-300">Next-Generation Curriculum</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Revolutionary Learning
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Experiences
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Five cutting-edge subject areas powered by artificial intelligence, 
            designed to prepare students for the challenges of tomorrow's world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subjects.map((subject, index) => {
            const IconComponent = subject.icon;
            return (
              <div
                key={subject.id}
                onClick={() => setActiveSection(subject.id)}
                className={`group relative bg-gradient-to-br from-slate-800/50 to-purple-900/50 backdrop-blur-lg rounded-3xl overflow-hidden border border-purple-500/20 hover:border-cyan-400/50 transition-all duration-500 cursor-pointer hover:transform hover:scale-105 ${subject.glowColor} hover:shadow-2xl ${index === 2 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-purple-900/20 group-hover:to-cyan-900/20 transition-all duration-500"></div>
                
                {/* Subject Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={subject.image} 
                    alt={subject.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                  
                  {/* Floating Icon */}
                  <div className={`absolute top-4 right-4 bg-gradient-to-br ${subject.gradient} p-3 rounded-xl shadow-lg group-hover:animate-pulse`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                </div>

                <div className="relative p-8">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                    {subject.title}
                  </h3>

                  <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                    {subject.description}
                  </p>

                  <div className="text-xs text-cyan-400 mb-6 font-medium bg-cyan-400/10 px-3 py-2 rounded-full inline-block">
                    {subject.keyStages}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      Explore Curriculum
                    </span>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-2 transition-all duration-300" />
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Learning Experience */}
        <div className="mt-24 relative">
          <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/50 backdrop-blur-lg rounded-3xl shadow-2xl p-12 border border-purple-500/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-4xl font-bold text-white mb-8">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Immersive AI Learning
                  </span>
                </h3>
                <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                  Experience education like never before with our revolutionary AI-powered platform 
                  that creates personalized learning journeys, adapts to individual needs, and 
                  provides real-time feedback for optimal learning outcomes.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full mr-6 animate-pulse"></div>
                    <span className="text-gray-300 text-lg">Adaptive neural learning pathways</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-cyan-600 rounded-full mr-6 animate-pulse delay-200"></div>
                    <span className="text-gray-300 text-lg">Quantum-speed progress analytics</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full mr-6 animate-pulse delay-400"></div>
                    <span className="text-gray-300 text-lg">Gamified achievement systems</span>
                  </div>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-cyan-400/30">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20"></div>
                <img 
                  src="https://images.pexels.com/photos/8613026/pexels-photo-8613026.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Students collaborating in futuristic learning environment"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
                
                {/* Floating Tech Elements */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-cyan-500 to-purple-600 px-4 py-2 rounded-full text-white text-sm font-medium">
                  AI Active
                </div>
                <div className="absolute bottom-4 right-4 bg-gradient-to-r from-green-500 to-cyan-600 px-4 py-2 rounded-full text-white text-sm font-medium">
                  Learning Mode
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubjectGrid;