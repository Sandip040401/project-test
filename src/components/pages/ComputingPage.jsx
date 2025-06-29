import React, { useState } from 'react';
import { Monitor, Code, Cpu, Shield, Play, Award, TrendingUp, ArrowLeft, ChevronRight, Terminal, Zap, CheckCircle } from 'lucide-react';

const ComputingPage = ({ setActiveSection }) => {
  const [activeCode, setActiveCode] = useState(0);
  const [codeOutput, setCodeOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  const computingTracks = [
    {
      id: 'programming',
      title: 'Programming Fundamentals',
      description: 'Learn coding with visual programming and text-based languages',
      level: 'Ages 8-16',
      lessons: 67,
      difficulty: 'Progressive',
      image: 'https://images.pexels.com/photos/8613200/pexels-photo-8613200.jpeg?auto=compress&cs=tinysrgb&w=400',
      gradient: 'from-orange-500 to-red-600',
      completed: 73
    },
    {
      id: 'algorithms',
      title: 'Algorithms & Logic',
      description: 'Understand algorithms through interactive visualizations',
      level: 'Ages 10-16',
      lessons: 54,
      difficulty: 'Advanced',
      image: 'https://images.pexels.com/photos/8613103/pexels-photo-8613103.jpeg?auto=compress&cs=tinysrgb&w=400',
      gradient: 'from-blue-500 to-cyan-600',
      completed: 68
    },
    {
      id: 'webdev',
      title: 'Web Development',
      description: 'Build websites with HTML, CSS, and JavaScript',
      level: 'Ages 12-16',
      lessons: 48,
      difficulty: 'Practical',
      image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=400',
      gradient: 'from-green-500 to-emerald-600',
      completed: 85
    },
    {
      id: 'gamedev',
      title: 'Game Development',
      description: 'Create interactive games and animations',
      level: 'Ages 10-16',
      lessons: 42,
      difficulty: 'Creative',
      image: 'https://images.pexels.com/photos/8613100/pexels-photo-8613100.jpeg?auto=compress&cs=tinysrgb&w=400',
      gradient: 'from-purple-500 to-violet-600',
      completed: 79
    }
  ];

  const codeExamples = [
    {
      language: 'Scratch',
      title: 'Interactive Animation',
      code: `when green flag clicked
set [score v] to [0]
set [speed v] to [5]

forever
    move (speed) steps
    if on edge, bounce
    
    if <touching [mouse-pointer v]?> then
        change [score v] by (1)
        play sound [pop v]
        wait (0.1) seconds
    end
    
    if <(score) > [10]> then
        change [speed v] by (1)
        say [Level Up!] for (2) seconds
    end
end`,
      description: 'Visual programming with interactive sprites',
      output: 'Animation started! Score: 0, Speed: 5'
    },
    {
      language: 'Python',
      title: 'Simple Calculator',
      code: `# Interactive Calculator
def calculator():
    print("Welcome to the Calculator!")
    
    while True:
        try:
            num1 = float(input("Enter first number: "))
            operator = input("Enter operator (+, -, *, /): ")
            num2 = float(input("Enter second number: "))
            
            if operator == '+':
                result = num1 + num2
            elif operator == '-':
                result = num1 - num2
            elif operator == '*':
                result = num1 * num2
            elif operator == '/':
                result = num1 / num2 if num2 != 0 else "Error: Division by zero"
            else:
                result = "Invalid operator"
            
            print(f"Result: {result}")
            
            if input("Continue? (y/n): ").lower() != 'y':
                break
                
        except ValueError:
            print("Please enter valid numbers!")

calculator()`,
      description: 'Building a functional calculator program',
      output: 'Welcome to the Calculator!\nEnter first number: 10\nEnter operator: +\nEnter second number: 5\nResult: 15.0'
    },
    {
      language: 'HTML/CSS',
      title: 'Interactive Webpage',
      code: `<!DOCTYPE html>
<html>
<head>
    <title>My First Website</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: linear-gradient(45deg, #667eea, #764ba2);
            color: white;
            text-align: center;
            padding: 50px;
        }
        
        .container {
            background: rgba(255,255,255,0.1);
            padding: 30px;
            border-radius: 15px;
            backdrop-filter: blur(10px);
        }
        
        button {
            background: #ff6b6b;
            color: white;
            border: none;
            padding: 15px 30px;
            border-radius: 25px;
            font-size: 18px;
            cursor: pointer;
            transition: all 0.3s;
        }
        
        button:hover {
            background: #ff5252;
            transform: scale(1.05);
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Welcome to My Website!</h1>
        <p>This is my first interactive webpage.</p>
        <button onclick="alert('Hello, World!')">Click Me!</button>
    </div>
</body>
</html>`,
      description: 'Creating responsive web pages with styling',
      output: 'Webpage rendered with interactive button and modern styling'
    }
  ];

  const programmingLanguages = [
    { name: 'Scratch', level: 95, icon: '🎨', color: 'from-orange-500 to-red-600', description: 'Visual programming' },
    { name: 'Python', level: 82, icon: '🐍', color: 'from-yellow-500 to-green-600', description: 'Beginner-friendly' },
    { name: 'JavaScript', level: 78, icon: '⚡', color: 'from-yellow-400 to-orange-600', description: 'Web development' },
    { name: 'HTML/CSS', level: 90, icon: '🌐', color: 'from-pink-500 to-purple-600', description: 'Web design' },
    { name: 'Java', level: 65, icon: '☕', color: 'from-red-500 to-purple-600', description: 'Object-oriented' },
    { name: 'C++', level: 58, icon: '⚙️', color: 'from-blue-500 to-cyan-600', description: 'System programming' }
  ];

  const runCode = () => {
    setIsRunning(true);
    setCodeOutput('Running code...');
    
    // Simulate code execution
    setTimeout(() => {
      setCodeOutput(codeExamples[activeCode].output);
      setIsRunning(false);
    }, 1500);
  };

  return (
    <main className="pt-24 pb-20 relative min-h-screen">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-32 left-20 w-64 h-64 bg-orange-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-32 right-20 w-80 h-80 bg-red-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Back Button */}
        <button
          onClick={() => setActiveSection('home')}
          className="mb-12 flex items-center bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm text-orange-300 hover:text-white transition-all duration-300 font-medium px-6 py-3 rounded-xl border border-orange-500/30 hover:border-orange-400/50"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Neural Hub
        </button>

        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-orange-500/30">
            <Monitor className="h-5 w-5 text-orange-400 mr-3 animate-pulse" />
            <span className="text-sm font-medium text-orange-300">Interactive Computing & Programming</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Computing
            </span>
            <br />
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Learning Hub
            </span>
          </h1>

          <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Interactive computing curriculum featuring hands-on programming, 
            algorithm visualization, and creative project-based learning.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="bg-gradient-to-br from-slate-800/50 to-orange-900/50 backdrop-blur-lg rounded-2xl p-6 border border-orange-500/20">
              <div className="text-3xl font-bold text-orange-400 mb-2">211</div>
              <div className="text-sm text-gray-300">Code Challenges</div>
            </div>
            <div className="bg-gradient-to-br from-slate-800/50 to-red-900/50 backdrop-blur-lg rounded-2xl p-6 border border-red-500/20">
              <div className="text-3xl font-bold text-red-400 mb-2">2,156</div>
              <div className="text-sm text-gray-300">Programs Created</div>
            </div>
            <div className="bg-gradient-to-br from-slate-800/50 to-blue-900/50 backdrop-blur-lg rounded-2xl p-6 border border-blue-500/20">
              <div className="text-3xl font-bold text-blue-400 mb-2">87%</div>
              <div className="text-sm text-gray-300">Success Rate</div>
            </div>
            <div className="bg-gradient-to-br from-slate-800/50 to-green-900/50 backdrop-blur-lg rounded-2xl p-6 border border-green-500/20">
              <div className="text-3xl font-bold text-green-400 mb-2">24</div>
              <div className="text-sm text-gray-300">Achievements</div>
            </div>
          </div>
        </div>

        {/* Computing Tracks */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Learning Tracks
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {computingTracks.map((track) => (
              <div
                key={track.id}
                className="group bg-gradient-to-br from-slate-800/50 to-orange-900/50 backdrop-blur-lg rounded-3xl overflow-hidden border border-orange-500/20 hover:border-red-400/50 transition-all duration-500 cursor-pointer hover:transform hover:scale-105"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={track.image} 
                    alt={track.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                  
                  <div className={`absolute top-4 right-4 bg-gradient-to-br ${track.gradient} p-3 rounded-xl shadow-lg`}>
                    <Monitor className="h-6 w-6 text-white" />
                  </div>

                  <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm text-white font-medium">{track.level}</span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{track.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{track.description}</p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Code className="h-4 w-4 text-orange-400 mr-2" />
                        <span className="text-sm text-gray-300">{track.lessons} Projects</span>
                      </div>
                      <div className="flex items-center">
                        <TrendingUp className="h-4 w-4 text-red-400 mr-2" />
                        <span className="text-sm text-gray-300">{track.difficulty}</span>
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  {/* <div className="mb-6">
                    <div className="flex justify-between text-sm text-gray-400 mb-2">
                      <span>Progress</span>
                      <span>{track.completed}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div 
                        className={`bg-gradient-to-r ${track.gradient} h-2 rounded-full transition-all duration-1000`}
                        style={{ width: `${track.completed}%` }}
                      ></div>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-3 px-6 rounded-xl font-bold hover:from-orange-400 hover:to-red-500 transition-all duration-300 flex items-center justify-center">
                    <Play className="w-5 h-5 mr-2" />
                    Start Coding
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </button> */}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Code Editor */}
        <div className="bg-gradient-to-br from-slate-800/50 to-orange-900/50 backdrop-blur-lg rounded-3xl p-12 mb-20 border border-orange-500/20">
          <div className="text-center mb-8">
            <h3 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Interactive Code Editor
              </span>
            </h3>
            <p className="text-xl text-gray-300">Practice coding with instant feedback and results</p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Code Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {codeExamples.map((example, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCode(index)}
                  className={`px-6 py-3 rounded-t-xl font-medium transition-all duration-300 ${
                    activeCode === index
                      ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white'
                      : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50'
                  }`}
                >
                  {example.language}
                </button>
              ))}
            </div>

            {/* Code Display */}
            <div className="bg-slate-900 rounded-2xl overflow-hidden border border-orange-500/30">
              <div className="bg-gradient-to-r from-slate-800 to-orange-900/30 px-6 py-4 border-b border-orange-500/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Terminal className="h-5 w-5 text-orange-400 mr-3" />
                    <span className="text-white font-semibold">{codeExamples[activeCode].title}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <pre className="text-sm text-gray-300 leading-relaxed overflow-x-auto">
                  <code>{codeExamples[activeCode].code}</code>
                </pre>
              </div>
              
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 px-6 py-4 border-t border-green-500/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Zap className="h-5 w-5 text-green-400 mr-3" />
                    <span className="text-green-300 text-sm">{codeExamples[activeCode].description}</span>
                  </div>
                  <button
                    onClick={runCode}
                    disabled={isRunning}
                    className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-xl font-medium hover:from-green-400 hover:to-emerald-500 transition-all duration-300 disabled:opacity-50"
                  >
                    {isRunning ? 'Running...' : 'Run Code'}
                  </button>
                </div>
              </div>

              {/* Output Section */}
              {codeOutput && (
                <div className="bg-slate-800 px-6 py-4 border-t border-slate-600">
                  <div className="flex items-center mb-2">
                    <Terminal className="h-4 w-4 text-blue-400 mr-2" />
                    <span className="text-blue-300 text-sm font-semibold">Output:</span>
                  </div>
                  <pre className="text-green-400 text-sm font-mono whitespace-pre-wrap">{codeOutput}</pre>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Programming Languages */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Programming Languages
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programmingLanguages.map((lang, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-orange-900/50 backdrop-blur-lg rounded-2xl p-8 border border-orange-500/20 hover:border-red-400/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <span className="text-3xl mr-4">{lang.icon}</span>
                    <div>
                      <h4 className="text-xl font-bold text-white">{lang.name}</h4>
                      <p className="text-sm text-gray-400">{lang.description}</p>
                    </div>
                  </div>
                  <span className="text-2xl font-bold text-orange-400">{lang.level}%</span>
                </div>
                
                <div className="w-full bg-slate-700 rounded-full h-3 mb-4">
                  <div 
                    className={`bg-gradient-to-r ${lang.color} h-3 rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${lang.level}%` }}
                  ></div>
                </div>

                {/* <button className="w-full bg-gradient-to-r from-slate-600 to-slate-700 text-white py-2 px-4 rounded-xl font-medium hover:from-slate-500 hover:to-slate-600 transition-all duration-300">
                  Practice {lang.name}
                </button> */}
              </div>
            ))}
          </div>
        </div>

        {/* Project Showcase */}
        <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/50 backdrop-blur-lg rounded-3xl p-12 border border-purple-500/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold mb-8">
                <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                  Creative Projects
                </span>
              </h3>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Build amazing projects like games, websites, mobile apps, and interactive animations. 
                Share your creations with the community and get feedback from peers.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Code className="h-6 w-6 text-purple-400 mr-4" />
                  <span className="text-gray-300">Interactive games and animations</span>
                </div>
                <div className="flex items-center">
                  <Monitor className="h-6 w-6 text-blue-400 mr-4" />
                  <span className="text-gray-300">Responsive websites and apps</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-6 w-6 text-green-400 mr-4" />
                  <span className="text-gray-300">Portfolio showcase and sharing</span>
                </div>
              </div>

              {/* <button className="bg-gradient-to-r from-purple-500 to-violet-600 text-white py-4 px-8 rounded-xl font-bold text-lg hover:from-purple-400 hover:to-violet-500 transition-all duration-300">
                Start Creating
              </button> */}
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/8613028/pexels-photo-8613028.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Students creating programming projects"
                className="w-full h-80 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent rounded-2xl"></div>
              
              <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-500 to-violet-600 px-4 py-2 rounded-full text-white text-sm font-medium">
                Creative Mode
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ComputingPage;