import React, { useState } from 'react';
import { Brain, Puzzle, Target, Lightbulb, Play, Award, TrendingUp, ArrowLeft, ChevronRight, Zap, CheckCircle } from 'lucide-react';

const ReasoningPage = ({ setActiveSection }) => {
  const [currentPuzzle, setCurrentPuzzle] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showSolution, setShowSolution] = useState(false);

  const reasoningModules = [
    {
      id: 'logic',
      title: 'Logic Puzzles',
      description: 'Advanced logical reasoning with step-by-step solutions',
      level: 'Ages 7-16',
      lessons: 58,
      difficulty: 'Progressive',
      image: 'https://images.pexels.com/photos/8613100/pexels-photo-8613100.jpeg?auto=compress&cs=tinysrgb&w=400',
      gradient: 'from-purple-500 to-violet-600',
      completed: 76
    },
    {
      id: 'patterns',
      title: 'Pattern Recognition',
      description: 'Visual and numerical pattern detection exercises',
      level: 'Ages 6-14',
      lessons: 45,
      difficulty: 'Adaptive',
      image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=400',
      gradient: 'from-blue-500 to-cyan-600',
      completed: 89
    },
    {
      id: 'critical',
      title: 'Critical Thinking',
      description: 'Analytical skills and problem-solving strategies',
      level: 'Ages 10-16',
      lessons: 52,
      difficulty: 'Advanced',
      image: 'https://images.pexels.com/photos/8613103/pexels-photo-8613103.jpeg?auto=compress&cs=tinysrgb&w=400',
      gradient: 'from-green-500 to-emerald-600',
      completed: 68
    },
    {
      id: 'problem',
      title: 'Problem Solving',
      description: 'Systematic approaches to complex challenges',
      level: 'Ages 8-16',
      lessons: 49,
      difficulty: 'Systematic',
      image: 'https://images.pexels.com/photos/8613204/pexels-photo-8613204.jpeg?auto=compress&cs=tinysrgb&w=400',
      gradient: 'from-orange-500 to-red-600',
      completed: 82
    }
  ];

  const puzzles = [
    {
      question: "If all Bloops are Razzles, and all Razzles are Lazzles, what can we conclude?",
      options: ["All Bloops are Lazzles", "Some Lazzles are Bloops", "No Bloops are Lazzles", "Cannot determine"],
      correct: 0,
      explanation: "This is a syllogism. If A→B and B→C, then A→C (transitive property). Since all Bloops are Razzles, and all Razzles are Lazzles, then all Bloops must be Lazzles.",
      type: "Logic"
    },
    {
      question: "What comes next in the sequence: 2, 6, 18, 54, ?",
      options: ["108", "162", "216", "324"],
      correct: 1,
      explanation: "Each number is multiplied by 3: 2×3=6, 6×3=18, 18×3=54, 54×3=162. The pattern is multiplication by 3.",
      type: "Pattern"
    },
    {
      question: "A robot can only move forward or turn right. How can it reach a point directly behind it?",
      options: ["Impossible", "Turn right 3 times", "Move in a square", "Turn right 2 times"],
      correct: 1,
      explanation: "Three right turns (270°) equals one left turn, facing the opposite direction. This allows the robot to face backward using only right turns.",
      type: "Problem Solving"
    },
    {
      question: "If it takes 5 machines 5 minutes to make 5 widgets, how long does it take 100 machines to make 100 widgets?",
      options: ["5 minutes", "20 minutes", "100 minutes", "500 minutes"],
      correct: 0,
      explanation: "Each machine makes 1 widget in 5 minutes. So 100 machines will make 100 widgets in 5 minutes (each machine still takes 5 minutes per widget).",
      type: "Critical Thinking"
    }
  ];

  const thinkingSkills = [
    { name: 'Logical Deduction', level: 87, color: 'from-purple-500 to-violet-600' },
    { name: 'Pattern Analysis', level: 92, color: 'from-blue-500 to-cyan-600' },
    { name: 'Critical Analysis', level: 78, color: 'from-green-500 to-emerald-600' },
    { name: 'Problem Solving', level: 85, color: 'from-orange-500 to-red-600' }
  ];

  const handleAnswerSelect = (index) => {
    setSelectedAnswer(index);
    setShowSolution(true);
  };

  const nextPuzzle = () => {
    setCurrentPuzzle((prev) => (prev + 1) % puzzles.length);
    setSelectedAnswer(null);
    setShowSolution(false);
  };

  const previousPuzzle = () => {
    setCurrentPuzzle((prev) => (prev - 1 + puzzles.length) % puzzles.length);
    setSelectedAnswer(null);
    setShowSolution(false);
  };

  return (
    <main className="pt-24 pb-20 relative min-h-screen">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-32 left-20 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-32 right-20 w-80 h-80 bg-violet-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Back Button */}
        <button
          onClick={() => setActiveSection('home')}
          className="mb-12 flex items-center bg-gradient-to-r from-purple-500/20 to-violet-500/20 backdrop-blur-sm text-purple-300 hover:text-white transition-all duration-300 font-medium px-6 py-3 rounded-xl border border-purple-500/30 hover:border-purple-400/50"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Neural Hub
        </button>

        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-500/20 to-violet-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-purple-500/30">
            <Brain className="h-5 w-5 text-purple-400 mr-3 animate-pulse" />
            <span className="text-sm font-medium text-purple-300">Critical Thinking & Logic</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
              Critical Reasoning
            </span>
            <br />
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Learning Hub
            </span>
          </h1>

          <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Interactive reasoning curriculum featuring logic puzzles, pattern recognition, 
            and critical thinking exercises to develop analytical skills.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/50 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20">
              <div className="text-3xl font-bold text-purple-400 mb-2">204</div>
              <div className="text-sm text-gray-300">Logic Puzzles</div>
            </div>
            <div className="bg-gradient-to-br from-slate-800/50 to-violet-900/50 backdrop-blur-lg rounded-2xl p-6 border border-violet-500/20">
              <div className="text-3xl font-bold text-violet-400 mb-2">1,523</div>
              <div className="text-sm text-gray-300">Problems Solved</div>
            </div>
            <div className="bg-gradient-to-br from-slate-800/50 to-blue-900/50 backdrop-blur-lg rounded-2xl p-6 border border-blue-500/20">
              <div className="text-3xl font-bold text-blue-400 mb-2">94%</div>
              <div className="text-sm text-gray-300">Logic Accuracy</div>
            </div>
            <div className="bg-gradient-to-br from-slate-800/50 to-green-900/50 backdrop-blur-lg rounded-2xl p-6 border border-green-500/20">
              <div className="text-3xl font-bold text-green-400 mb-2">18</div>
              <div className="text-sm text-gray-300">Achievements</div>
            </div>
          </div>
        </div>

        {/* Reasoning Modules */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
              Reasoning Modules
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reasoningModules.map((module) => (
              <div
                key={module.id}
                className="group bg-gradient-to-br from-slate-800/50 to-purple-900/50 backdrop-blur-lg rounded-3xl overflow-hidden border border-purple-500/20 hover:border-violet-400/50 transition-all duration-500 cursor-pointer hover:transform hover:scale-105"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={module.image} 
                    alt={module.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                  
                  <div className={`absolute top-4 right-4 bg-gradient-to-br ${module.gradient} p-3 rounded-xl shadow-lg`}>
                    <Brain className="h-6 w-6 text-white" />
                  </div>

                  <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm text-white font-medium">{module.level}</span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{module.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{module.description}</p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Puzzle className="h-4 w-4 text-purple-400 mr-2" />
                        <span className="text-sm text-gray-300">{module.lessons} Challenges</span>
                      </div>
                      <div className="flex items-center">
                        <TrendingUp className="h-4 w-4 text-violet-400 mr-2" />
                        <span className="text-sm text-gray-300">{module.difficulty}</span>
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  {/* <div className="mb-6">
                    <div className="flex justify-between text-sm text-gray-400 mb-2">
                      <span>Progress</span>
                      <span>{module.completed}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div 
                        className={`bg-gradient-to-r ${module.gradient} h-2 rounded-full transition-all duration-1000`}
                        style={{ width: `${module.completed}%` }}
                      ></div>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-purple-500 to-violet-600 text-white py-3 px-6 rounded-xl font-bold hover:from-purple-400 hover:to-violet-500 transition-all duration-300 flex items-center justify-center">
                    <Play className="w-5 h-5 mr-2" />
                    Start Challenge
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </button> */}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Puzzle */}
        <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/50 backdrop-blur-lg rounded-3xl p-12 mb-20 border border-purple-500/20">
          <div className="text-center mb-8">
            <h3 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                Logic Challenge
              </span>
            </h3>
            <p className="text-xl text-gray-300">Test your reasoning skills with interactive puzzles</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-purple-500/20 to-violet-500/20 rounded-2xl p-8 border border-purple-500/30 mb-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <Lightbulb className="h-6 w-6 text-yellow-400 mr-3 animate-pulse" />
                  <span className="text-lg font-semibold text-white">Puzzle {currentPuzzle + 1} of {puzzles.length}</span>
                </div>
                <div className="flex items-center">
                  <Zap className="h-5 w-5 text-purple-400 mr-2" />
                  <span className="text-sm text-purple-300">{puzzles[currentPuzzle].type}</span>
                </div>
              </div>

              <div className="text-xl text-white mb-8 leading-relaxed">
                {puzzles[currentPuzzle].question}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {puzzles[currentPuzzle].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    className={`p-4 rounded-xl border transition-all duration-300 text-left ${
                      selectedAnswer === index
                        ? index === puzzles[currentPuzzle].correct
                          ? 'bg-green-500/20 border-green-400 text-green-300'
                          : 'bg-red-500/20 border-red-400 text-red-300'
                        : 'bg-slate-700/50 border-purple-500/30 text-white hover:border-purple-400/50'
                    }`}
                    disabled={showSolution}
                  >
                    <span className="font-semibold mr-3">{String.fromCharCode(65 + index)}.</span>
                    {option}
                  </button>
                ))}
              </div>

              {showSolution && (
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl p-6 border border-green-500/30 mb-6">
                  <div className="flex items-center mb-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                    <span className="text-green-300 font-semibold">Explanation:</span>
                  </div>
                  <div className="text-white">{puzzles[currentPuzzle].explanation}</div>
                </div>
              )}

              <div className="flex justify-center space-x-4">
                <button 
                  onClick={previousPuzzle}
                  className="bg-gradient-to-r from-slate-600 to-slate-700 text-white py-3 px-6 rounded-xl font-medium hover:from-slate-500 hover:to-slate-600 transition-all duration-300"
                >
                  Previous
                </button>
                <button 
                  onClick={nextPuzzle}
                  className="bg-gradient-to-r from-purple-500 to-violet-600 text-white py-3 px-6 rounded-xl font-medium hover:from-purple-400 hover:to-violet-500 transition-all duration-300"
                >
                  Next Challenge
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Thinking Skills Progress */}
        {/* <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
              Thinking Skills Progress
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {thinkingSkills.map((skill, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-purple-900/50 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-bold text-white">{skill.name}</h4>
                  <span className="text-2xl font-bold text-purple-400">{skill.level}%</span>
                </div>
                
                <div className="w-full bg-slate-700 rounded-full h-3 mb-6">
                  <div 
                    className={`bg-gradient-to-r ${skill.color} h-3 rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>Beginner</span>
                  <span>Expert</span>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Brain Training Games */}
        <div className="bg-gradient-to-br from-slate-800/50 to-blue-900/50 backdrop-blur-lg rounded-3xl p-12 border border-blue-500/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold mb-8">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Brain Training Games
                </span>
              </h3>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Enhance your cognitive abilities with fun, interactive games designed 
                to improve memory, attention, processing speed, and problem-solving skills.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Target className="h-6 w-6 text-blue-400 mr-4" />
                  <span className="text-gray-300">Memory enhancement exercises</span>
                </div>
                <div className="flex items-center">
                  <Puzzle className="h-6 w-6 text-purple-400 mr-4" />
                  <span className="text-gray-300">Spatial reasoning challenges</span>
                </div>
                <div className="flex items-center">
                  <Zap className="h-6 w-6 text-yellow-400 mr-4" />
                  <span className="text-gray-300">Processing speed training</span>
                </div>
              </div>

              {/* <button className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white py-4 px-8 rounded-xl font-bold text-lg hover:from-blue-400 hover:to-cyan-500 transition-all duration-300">
                Start Brain Training
              </button> */}
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/8613026/pexels-photo-8613026.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Students playing brain training games"
                className="w-full h-80 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent rounded-2xl"></div>
              
              <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-cyan-600 px-4 py-2 rounded-full text-white text-sm font-medium">
                Training Mode
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ReasoningPage;