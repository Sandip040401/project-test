import React, { useState } from 'react';
import { Calculator, Brain, Target, Zap, Play, BookOpen, Award, TrendingUp, ArrowLeft, ChevronRight, CheckCircle } from 'lucide-react';

const MathematicsPage = ({ setActiveSection }) => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [currentProblem, setCurrentProblem] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [showSolution, setShowSolution] = useState(false);

  const mathTopics = [
    {
      id: 'algebra',
      title: 'Quantum Algebra',
      description: 'Advanced algebraic concepts with AI-powered problem solving',
      level: 'Ages 8-16',
      lessons: 45,
      difficulty: 'Intermediate',
      image: 'https://images.pexels.com/photos/8613204/pexels-photo-8613204.jpeg?auto=compress&cs=tinysrgb&w=400',
      gradient: 'from-blue-500 to-cyan-600',
      completed: 78
    },
    {
      id: 'geometry',
      title: 'Neural Geometry',
      description: 'Interactive 3D geometry with holographic visualizations',
      level: 'Ages 6-14',
      lessons: 38,
      difficulty: 'Beginner',
      image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=400',
      gradient: 'from-green-500 to-emerald-600',
      completed: 92
    },
    {
      id: 'calculus',
      title: 'AI Calculus',
      description: 'Machine learning-enhanced calculus for advanced students',
      level: 'Ages 14-16',
      lessons: 52,
      difficulty: 'Advanced',
      image: 'https://images.pexels.com/photos/8613103/pexels-photo-8613103.jpeg?auto=compress&cs=tinysrgb&w=400',
      gradient: 'from-purple-500 to-violet-600',
      completed: 65
    },
    {
      id: 'statistics',
      title: 'Data Science Math',
      description: 'Statistical analysis with real-world AI applications',
      level: 'Ages 12-16',
      lessons: 41,
      difficulty: 'Intermediate',
      image: 'https://images.pexels.com/photos/8613100/pexels-photo-8613100.jpeg?auto=compress&cs=tinysrgb&w=400',
      gradient: 'from-orange-500 to-red-600',
      completed: 84
    }
  ];

  const mathProblems = [
    {
      question: "Solve for x: 2x + 5 = 17",
      answer: "6",
      solution: "Subtract 5 from both sides: 2x = 12, then divide by 2: x = 6",
      difficulty: "Basic Algebra"
    },
    {
      question: "What is the area of a circle with radius 4?",
      answer: "50.27",
      solution: "Area = πr² = π × 4² = 16π ≈ 50.27 square units",
      difficulty: "Geometry"
    },
    {
      question: "Find the derivative of f(x) = 3x² + 2x - 1",
      answer: "6x + 2",
      solution: "Using power rule: d/dx(3x²) = 6x, d/dx(2x) = 2, d/dx(-1) = 0. So f'(x) = 6x + 2",
      difficulty: "Calculus"
    }
  ];

  const achievements = [
    { title: 'Problem Solver', description: 'Solved 100+ equations', icon: Target, color: 'text-cyan-400', unlocked: true },
    { title: 'Logic Master', description: 'Perfect reasoning scores', icon: Brain, color: 'text-purple-400', unlocked: true },
    { title: 'Speed Calculator', description: 'Lightning-fast computations', icon: Zap, color: 'text-yellow-400', unlocked: false },
    { title: 'Math Genius', description: 'Top 1% performance', icon: Award, color: 'text-green-400', unlocked: false }
  ];

  const handleAnswerSubmit = () => {
    setShowSolution(true);
  };

  const nextProblem = () => {
    setCurrentProblem((prev) => (prev + 1) % mathProblems.length);
    setUserAnswer('');
    setShowSolution(false);
  };

  return (
    <main className="pt-24 pb-20 relative min-h-screen">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-32 left-20 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-32 right-20 w-80 h-80 bg-cyan-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Back Button */}
        <button
          onClick={() => setActiveSection('home')}
          className="mb-12 flex items-center bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm text-blue-300 hover:text-white transition-all duration-300 font-medium px-6 py-3 rounded-xl border border-blue-500/30 hover:border-blue-400/50"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Neural Hub
        </button>

        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-blue-500/30">
            <Calculator className="h-5 w-5 text-blue-400 mr-3 animate-pulse" />
            <span className="text-sm font-medium text-blue-300">Interactive Mathematics Learning</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Mathematics
            </span>
            <br />
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Learning Hub
            </span>
          </h1>

          <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Interactive mathematics curriculum featuring visual problem solving, 
            step-by-step solutions, and gamified learning experiences.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="bg-gradient-to-br from-slate-800/50 to-blue-900/50 backdrop-blur-lg rounded-2xl p-6 border border-blue-500/20">
              <div className="text-3xl font-bold text-blue-400 mb-2">176</div>
              <div className="text-sm text-gray-300">Interactive Lessons</div>
            </div>
            <div className="bg-gradient-to-br from-slate-800/50 to-cyan-900/50 backdrop-blur-lg rounded-2xl p-6 border border-cyan-500/20">
              <div className="text-3xl font-bold text-cyan-400 mb-2">1,247</div>
              <div className="text-sm text-gray-300">Problems Solved</div>
            </div>
            <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/50 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20">
              <div className="text-3xl font-bold text-purple-400 mb-2">89%</div>
              <div className="text-sm text-gray-300">Completion Rate</div>
            </div>
            <div className="bg-gradient-to-br from-slate-800/50 to-green-900/50 backdrop-blur-lg rounded-2xl p-6 border border-green-500/20">
              <div className="text-3xl font-bold text-green-400 mb-2">12</div>
              <div className="text-sm text-gray-300">Achievements</div>
            </div>
          </div>
        </div>

        {/* Learning Topics */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Learning Modules
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mathTopics.map((topic) => (
              <div
                key={topic.id}
                className="group bg-gradient-to-br from-slate-800/50 to-blue-900/50 backdrop-blur-lg rounded-3xl overflow-hidden border border-blue-500/20 hover:border-cyan-400/50 transition-all duration-500 cursor-pointer hover:transform hover:scale-105"
                onClick={() => setSelectedTopic(topic)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={topic.image} 
                    alt={topic.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                  
                  <div className={`absolute top-4 right-4 bg-gradient-to-br ${topic.gradient} p-3 rounded-xl shadow-lg`}>
                    <Calculator className="h-6 w-6 text-white" />
                  </div>

                  <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm text-white font-medium">{topic.level}</span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{topic.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{topic.description}</p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <BookOpen className="h-4 w-4 text-blue-400 mr-2" />
                        <span className="text-sm text-gray-300">{topic.lessons} Lessons</span>
                      </div>
                      <div className="flex items-center">
                        <TrendingUp className="h-4 w-4 text-green-400 mr-2" />
                        <span className="text-sm text-gray-300">{topic.difficulty}</span>
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-6">
                    <div className="flex justify-between text-sm text-gray-400 mb-2">
                      <span>Progress</span>
                      <span>{topic.completed}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div 
                        className={`bg-gradient-to-r ${topic.gradient} h-2 rounded-full transition-all duration-1000`}
                        style={{ width: `${topic.completed}%` }}
                      ></div>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 text-white py-3 px-6 rounded-xl font-bold hover:from-blue-400 hover:to-cyan-500 transition-all duration-300 flex items-center justify-center">
                    <Play className="w-5 h-5 mr-2" />
                    Continue Learning
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Problem Solver */}
        <div className="bg-gradient-to-br from-slate-800/50 to-blue-900/50 backdrop-blur-lg rounded-3xl p-12 mb-20 border border-blue-500/20">
          <div className="text-center mb-8">
            <h3 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Interactive Problem Solver
              </span>
            </h3>
            <p className="text-xl text-gray-300">Practice with step-by-step solutions and instant feedback</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl p-8 border border-blue-500/30 mb-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <Calculator className="h-6 w-6 text-blue-400 mr-3" />
                  <span className="text-lg font-semibold text-white">Problem {currentProblem + 1} of {mathProblems.length}</span>
                </div>
                <div className="bg-blue-500/20 px-3 py-1 rounded-full">
                  <span className="text-sm text-blue-300">{mathProblems[currentProblem].difficulty}</span>
                </div>
              </div>

              <div className="text-2xl text-white mb-8 font-mono">
                {mathProblems[currentProblem].question}
              </div>

              <div className="flex gap-4 mb-6">
                <input
                  type="text"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  placeholder="Enter your answer..."
                  className="flex-1 bg-slate-800/50 border border-blue-500/30 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none"
                />
                <button
                  onClick={handleAnswerSubmit}
                  className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-3 rounded-xl font-bold hover:from-blue-400 hover:to-cyan-500 transition-all duration-300"
                >
                  Check Answer
                </button>
              </div>

              {showSolution && (
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl p-6 border border-green-500/30 mb-6">
                  <div className="flex items-center mb-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                    <span className="text-green-300 font-semibold">Solution:</span>
                  </div>
                  <div className="text-white mb-2">Answer: {mathProblems[currentProblem].answer}</div>
                  <div className="text-gray-300">{mathProblems[currentProblem].solution}</div>
                </div>
              )}

              <div className="flex justify-center">
                <button
                  onClick={nextProblem}
                  className="bg-gradient-to-r from-purple-500 to-violet-600 text-white px-6 py-3 rounded-xl font-medium hover:from-purple-400 hover:to-violet-500 transition-all duration-300"
                >
                  Next Problem
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Learning Achievements
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div key={index} className={`bg-gradient-to-br from-slate-800/50 to-blue-900/50 backdrop-blur-lg rounded-2xl p-6 text-center border transition-all duration-300 ${
                  achievement.unlocked 
                    ? 'border-blue-500/20 hover:border-cyan-400/50' 
                    : 'border-gray-600/20 opacity-60'
                }`}>
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 ${
                    achievement.unlocked 
                      ? 'bg-gradient-to-br from-blue-500 to-cyan-600' 
                      : 'bg-gray-600'
                  }`}>
                    <IconComponent className={`h-8 w-8 ${achievement.unlocked ? achievement.color : 'text-gray-400'}`} />
                  </div>
                  <h4 className="font-bold text-white mb-2">{achievement.title}</h4>
                  <p className="text-sm text-gray-300">{achievement.description}</p>
                  {achievement.unlocked && (
                    <div className="mt-3">
                      <CheckCircle className="h-5 w-5 text-green-400 mx-auto" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Visual Learning Tools */}
        <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/50 backdrop-blur-lg rounded-3xl p-12 border border-purple-500/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold mb-8">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Visual Learning Tools
                </span>
              </h3>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Interactive graphs, 3D visualizations, and step-by-step animations 
                help you understand complex mathematical concepts intuitively.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-600 rounded-full mr-6"></div>
                  <span className="text-gray-300">Interactive graphing calculator</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-600 rounded-full mr-6"></div>
                  <span className="text-gray-300">3D geometry visualizations</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-violet-600 rounded-full mr-6"></div>
                  <span className="text-gray-300">Step-by-step solution animations</span>
                </div>
              </div>

              <button className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white py-4 px-8 rounded-xl font-bold text-lg hover:from-blue-400 hover:to-cyan-500 transition-all duration-300">
                Explore Visual Tools
              </button>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/8613087/pexels-photo-8613087.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Students using visual math tools"
                className="w-full h-80 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent rounded-2xl"></div>
              
              <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-cyan-600 px-4 py-2 rounded-full text-white text-sm font-medium">
                Interactive Mode
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MathematicsPage;