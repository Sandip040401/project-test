import React, { useState } from 'react';
import { Sparkles, Brain, Notebook as Robot, Zap, Play, Award, TrendingUp, ArrowLeft, ChevronRight, Cpu, Network, CheckCircle } from 'lucide-react';

const AILearningPage = ({ setActiveSection }) => {
  const [selectedDemo, setSelectedDemo] = useState(0);
  const [aiResponse, setAiResponse] = useState('');
  const [userInput, setUserInput] = useState('');

  const aiModules = [
    {
      id: 'ml-basics',
      title: 'Machine Learning Basics',
      description: 'Introduction to AI concepts through interactive simulations',
      level: 'Ages 10-16',
      lessons: 72,
      difficulty: 'Beginner',
      image: 'https://images.pexels.com/photos/8613028/pexels-photo-8613028.jpeg?auto=compress&cs=tinysrgb&w=400',
      gradient: 'from-indigo-500 to-purple-600',
      completed: 64
    },
    {
      id: 'neural-networks',
      title: 'Neural Networks',
      description: 'Visual neural network builder and training simulator',
      level: 'Ages 12-16',
      lessons: 58,
      difficulty: 'Intermediate',
      image: 'https://images.pexels.com/photos/8613103/pexels-photo-8613103.jpeg?auto=compress&cs=tinysrgb&w=400',
      gradient: 'from-blue-500 to-cyan-600',
      completed: 71
    },
    {
      id: 'robotics',
      title: 'AI Robotics',
      description: 'Program virtual robots with AI decision-making',
      level: 'Ages 11-16',
      lessons: 64,
      difficulty: 'Advanced',
      image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=400',
      gradient: 'from-green-500 to-emerald-600',
      completed: 58
    },
    {
      id: 'ethics',
      title: 'AI Ethics & Society',
      description: 'Explore the impact of AI on society and ethics',
      level: 'Ages 13-16',
      lessons: 45,
      difficulty: 'Critical Thinking',
      image: 'https://images.pexels.com/photos/8613100/pexels-photo-8613100.jpeg?auto=compress&cs=tinysrgb&w=400',
      gradient: 'from-purple-500 to-pink-600',
      completed: 87
    }
  ];

  const aiDemos = [
    {
      title: 'Image Recognition',
      description: 'Train an AI to recognize different objects and animals',
      concept: 'Computer Vision',
      activity: 'Upload images and watch the AI learn to classify them',
      example: 'AI detected: Cat (95.3% confidence)'
    },
    {
      title: 'Chatbot Builder',
      description: 'Create your own AI chatbot with personality',
      concept: 'Natural Language Processing',
      activity: 'Design conversation flows and train responses',
      example: 'Bot: Hello! I\'m your AI study buddy. How can I help you learn today?'
    },
    {
      title: 'Recommendation Engine',
      description: 'Build an AI that suggests books, movies, or music',
      concept: 'Machine Learning',
      activity: 'Rate items and see how AI learns your preferences',
      example: 'Based on your interests, you might like: "The Martian" (87% match)'
    },
    {
      title: 'Virtual Pet AI',
      description: 'Create an AI pet that learns and adapts to your care',
      concept: 'Reinforcement Learning',
      activity: 'Feed, play, and train your AI pet to develop behaviors',
      example: 'Your AI pet learned a new trick! Happiness level: 92%'
    }
  ];

  const aiConcepts = [
    { name: 'Machine Learning', progress: 89, icon: '🤖', color: 'from-blue-500 to-cyan-600' },
    { name: 'Neural Networks', progress: 76, icon: '🧠', color: 'from-purple-500 to-violet-600' },
    { name: 'Computer Vision', progress: 82, icon: '👁️', color: 'from-green-500 to-emerald-600' },
    { name: 'Natural Language', progress: 91, icon: '💬', color: 'from-orange-500 to-red-600' },
    { name: 'Robotics', progress: 73, icon: '🦾', color: 'from-indigo-500 to-purple-600' },
    { name: 'AI Ethics', progress: 95, icon: '⚖️', color: 'from-pink-500 to-rose-600' }
  ];

  const simulateAI = () => {
    const responses = [
      "That's a great question! Let me think about that...",
      "Based on the patterns I've learned, I would suggest...",
      "Interesting! This reminds me of a similar problem where...",
      "I'm processing your input and finding relevant connections...",
      "Here's what I've learned from analyzing thousands of examples..."
    ];
    
    setAiResponse(responses[Math.floor(Math.random() * responses.length)]);
    
    setTimeout(() => {
      setAiResponse(aiDemos[selectedDemo].example);
    }, 2000);
  };

  return (
    <main className="pt-24 pb-20 relative min-h-screen">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-32 left-20 w-64 h-64 bg-indigo-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-32 right-20 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-500/30 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Back Button */}
        <button
          onClick={() => setActiveSection('home')}
          className="mb-12 flex items-center bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm text-indigo-300 hover:text-white transition-all duration-300 font-medium px-6 py-3 rounded-xl border border-indigo-500/30 hover:border-indigo-400/50"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Neural Hub
        </button>

        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-indigo-500/30">
            <Sparkles className="h-5 w-5 text-indigo-400 mr-3 animate-pulse" />
            <span className="text-sm font-medium text-indigo-300">Artificial Intelligence & Future Technology</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              AI Learning
            </span>
            <br />
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Future Hub
            </span>
          </h1>

          <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Interactive AI curriculum featuring hands-on machine learning experiments, 
            neural network simulations, and ethical AI discussions for future innovators.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="bg-gradient-to-br from-slate-800/50 to-indigo-900/50 backdrop-blur-lg rounded-2xl p-6 border border-indigo-500/20">
              <div className="text-3xl font-bold text-indigo-400 mb-2">239</div>
              <div className="text-sm text-gray-300">AI Experiments</div>
            </div>
            <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/50 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20">
              <div className="text-3xl font-bold text-purple-400 mb-2">1,892</div>
              <div className="text-sm text-gray-300">Models Trained</div>
            </div>
            <div className="bg-gradient-to-br from-slate-800/50 to-cyan-900/50 backdrop-blur-lg rounded-2xl p-6 border border-cyan-500/20">
              <div className="text-3xl font-bold text-cyan-400 mb-2">91%</div>
              <div className="text-sm text-gray-300">AI Accuracy</div>
            </div>
            <div className="bg-gradient-to-br from-slate-800/50 to-pink-900/50 backdrop-blur-lg rounded-2xl p-6 border border-pink-500/20">
              <div className="text-3xl font-bold text-pink-400 mb-2">28</div>
              <div className="text-sm text-gray-300">Achievements</div>
            </div>
          </div>
        </div>

        {/* AI Learning Modules */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              AI Learning Modules
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiModules.map((module) => (
              <div
                key={module.id}
                className="group bg-gradient-to-br from-slate-800/50 to-indigo-900/50 backdrop-blur-lg rounded-3xl overflow-hidden border border-indigo-500/20 hover:border-purple-400/50 transition-all duration-500 cursor-pointer hover:transform hover:scale-105"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={module.image} 
                    alt={module.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                  
                  <div className={`absolute top-4 right-4 bg-gradient-to-br ${module.gradient} p-3 rounded-xl shadow-lg`}>
                    <Sparkles className="h-6 w-6 text-white" />
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
                        <Brain className="h-4 w-4 text-indigo-400 mr-2" />
                        <span className="text-sm text-gray-300">{module.lessons} Experiments</span>
                      </div>
                      <div className="flex items-center">
                        <TrendingUp className="h-4 w-4 text-purple-400 mr-2" />
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

                  <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 px-6 rounded-xl font-bold hover:from-indigo-400 hover:to-purple-500 transition-all duration-300 flex items-center justify-center">
                    <Play className="w-5 h-5 mr-2" />
                    Start AI Journey
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </button> */}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive AI Playground */}
        <div className="bg-gradient-to-br from-slate-800/50 to-indigo-900/50 backdrop-blur-lg rounded-3xl p-12 mb-20 border border-indigo-500/20">
          <div className="text-center mb-8">
            <h3 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                AI Playground
              </span>
            </h3>
            <p className="text-xl text-gray-300">Experiment with AI concepts through interactive simulations</p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Demo Tabs */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
              {aiDemos.map((demo, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedDemo(index)}
                  className={`p-4 rounded-xl font-medium transition-all duration-300 text-center ${
                    selectedDemo === index
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white'
                      : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50'
                  }`}
                >
                  <div className="text-lg font-bold mb-1">{demo.title}</div>
                  <div className="text-xs opacity-75">{demo.concept}</div>
                </button>
              ))}
            </div>

            {/* Demo Content */}
            <div className="bg-slate-900 rounded-2xl overflow-hidden border border-indigo-500/30">
              <div className="bg-gradient-to-r from-slate-800 to-indigo-900/30 px-6 py-4 border-b border-indigo-500/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Robot className="h-5 w-5 text-indigo-400 mr-3" />
                    <span className="text-white font-semibold">{aiDemos[selectedDemo].title}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Cpu className="h-4 w-4 text-green-400" />
                    <span className="text-green-400 text-sm">AI Active</span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mt-2">{aiDemos[selectedDemo].description}</p>
              </div>
              
              <div className="p-8">
                <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl p-6 border border-indigo-500/30 mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Try it yourself:</h4>
                  <p className="text-gray-300 mb-4">{aiDemos[selectedDemo].activity}</p>
                  
                  <div className="flex gap-4">
                    <input
                      type="text"
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      placeholder="Type something to test the AI..."
                      className="flex-1 bg-slate-800/50 border border-indigo-500/30 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-indigo-400 focus:outline-none"
                    />
                    <button
                      onClick={simulateAI}
                      className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-xl font-bold hover:from-indigo-400 hover:to-purple-500 transition-all duration-300"
                    >
                      Test AI
                    </button>
                  </div>
                </div>

                {aiResponse && (
                  <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl p-6 border border-green-500/30">
                    <div className="flex items-center mb-3">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                      <span className="text-green-300 font-semibold">AI Response:</span>
                    </div>
                    <div className="text-white">{aiResponse}</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* AI Concepts Progress */}
        {/* <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              AI Mastery Progress
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiConcepts.map((concept, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-indigo-900/50 backdrop-blur-lg rounded-2xl p-8 border border-indigo-500/20 hover:border-purple-400/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <span className="text-3xl mr-4">{concept.icon}</span>
                    <h4 className="text-lg font-bold text-white">{concept.name}</h4>
                  </div>
                  <span className="text-2xl font-bold text-indigo-400">{concept.progress}%</span>
                </div>
                
                <div className="w-full bg-slate-700 rounded-full h-3 mb-6">
                  <div 
                    className={`bg-gradient-to-r ${concept.color} h-3 rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${concept.progress}%` }}
                  ></div>
                </div>

                <button className="w-full bg-gradient-to-r from-slate-600 to-slate-700 text-white py-2 px-4 rounded-xl font-medium hover:from-slate-500 hover:to-slate-600 transition-all duration-300">
                  Explore {concept.name}
                </button>
              </div>
            ))}
          </div>
        </div> */}

        {/* Future AI Section */}
        <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/50 backdrop-blur-lg rounded-3xl p-12 border border-purple-500/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold mb-8">
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  The Future of AI Education
                </span>
              </h3>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Prepare for tomorrow's world with hands-on AI education that combines 
                theoretical understanding with practical applications, ethical considerations, 
                and creative problem-solving skills.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Network className="h-6 w-6 text-indigo-400 mr-4" />
                  <span className="text-gray-300">Interactive neural network simulations</span>
                </div>
                <div className="flex items-center">
                  <Robot className="h-6 w-6 text-purple-400 mr-4" />
                  <span className="text-gray-300">Virtual robotics and AI programming</span>
                </div>
                <div className="flex items-center">
                  <Brain className="h-6 w-6 text-cyan-400 mr-4" />
                  <span className="text-gray-300">Ethical AI and societal impact discussions</span>
                </div>
              </div>

              {/* <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-4 px-8 rounded-xl font-bold text-lg hover:from-indigo-400 hover:to-purple-500 transition-all duration-300 flex items-center">
                <Sparkles className="w-6 h-6 mr-3" />
                Join AI Revolution
              </button> */}
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/8613026/pexels-photo-8613026.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Future AI learning environment"
                className="w-full h-80 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent rounded-2xl"></div>
              
              <div className="absolute top-4 left-4 bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-2 rounded-full text-white text-sm font-medium animate-pulse">
                Future Mode
              </div>
              <div className="absolute bottom-4 right-4 bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 rounded-full text-white text-sm font-medium">
                AI Enhanced
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AILearningPage;