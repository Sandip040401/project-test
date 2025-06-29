import React, { useState } from 'react';
import { BookOpen, PenTool, MessageCircle, Mic, Play, Award, TrendingUp, ArrowLeft, ChevronRight, Sparkles, CheckCircle } from 'lucide-react';

const EnglishPage = ({ setActiveSection }) => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [currentStory, setCurrentStory] = useState('');
  const [writingPromptIndex, setWritingPromptIndex] = useState(0);

  const englishSkills = [
    {
      id: 'reading',
      title: 'Reading Comprehension',
      description: 'Interactive stories with comprehension questions and analysis',
      level: 'Ages 5-16',
      lessons: 62,
      difficulty: 'Adaptive',
      image: 'https://images.pexels.com/photos/8613097/pexels-photo-8613097.jpeg?auto=compress&cs=tinysrgb&w=400',
      gradient: 'from-green-500 to-emerald-600',
      completed: 85
    },
    {
      id: 'writing',
      title: 'Creative Writing',
      description: 'Guided creative writing with prompts and feedback',
      level: 'Ages 7-16',
      lessons: 48,
      difficulty: 'Progressive',
      image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=400',
      gradient: 'from-purple-500 to-violet-600',
      completed: 72
    },
    {
      id: 'speaking',
      title: 'Speech & Presentation',
      description: 'Practice pronunciation and presentation skills',
      level: 'Ages 6-16',
      lessons: 55,
      difficulty: 'Interactive',
      image: 'https://images.pexels.com/photos/8613103/pexels-photo-8613103.jpeg?auto=compress&cs=tinysrgb&w=400',
      gradient: 'from-blue-500 to-cyan-600',
      completed: 91
    },
    {
      id: 'grammar',
      title: 'Grammar & Language',
      description: 'Interactive grammar lessons with instant feedback',
      level: 'Ages 8-16',
      lessons: 44,
      difficulty: 'Systematic',
      image: 'https://images.pexels.com/photos/8613100/pexels-photo-8613100.jpeg?auto=compress&cs=tinysrgb&w=400',
      gradient: 'from-orange-500 to-red-600',
      completed: 67
    }
  ];

  const writingPrompts = [
    "Write a story about a magical library where books come to life",
    "Describe your perfect day in the future when you're 25 years old",
    "Create a dialogue between a student and their favorite fictional character",
    "Write about a world where everyone has a unique superpower",
    "Describe a mysterious door that appears in your school hallway"
  ];

  const grammarQuestions = [
    {
      question: "Choose the correct verb form: 'She _____ to school every day.'",
      options: ["go", "goes", "going", "gone"],
      correct: 1,
      explanation: "Use 'goes' because the subject 'she' is third person singular and the sentence describes a habitual action."
    },
    {
      question: "Which sentence uses correct punctuation?",
      options: [
        "Hello, how are you today?",
        "Hello how are you today.",
        "Hello; how are you today!",
        "Hello how are you today?"
      ],
      correct: 0,
      explanation: "A comma is needed after 'Hello' and a question mark at the end because it's a question."
    }
  ];

  const [currentGrammarQ, setCurrentGrammarQ] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleAnswerSelect = (index) => {
    setSelectedAnswer(index);
    setShowExplanation(true);
  };

  const nextGrammarQuestion = () => {
    setCurrentGrammarQ((prev) => (prev + 1) % grammarQuestions.length);
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  const generateNewPrompt = () => {
    setWritingPromptIndex((prev) => (prev + 1) % writingPrompts.length);
    setCurrentStory('');
  };

  return (
    <main className="pt-24 pb-20 relative min-h-screen">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-32 left-20 w-64 h-64 bg-green-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-32 right-20 w-80 h-80 bg-emerald-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Back Button */}
        <button
          onClick={() => setActiveSection('home')}
          className="mb-12 flex items-center bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm text-green-300 hover:text-white transition-all duration-300 font-medium px-6 py-3 rounded-xl border border-green-500/30 hover:border-green-400/50"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Neural Hub
        </button>

        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-green-500/30">
            <BookOpen className="h-5 w-5 text-green-400 mr-3 animate-pulse" />
            <span className="text-sm font-medium text-green-300">Interactive Language Arts</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              English
            </span>
            <br />
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Learning Hub
            </span>
          </h1>

          <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Interactive English language curriculum featuring creative writing tools, 
            reading comprehension activities, and speech practice exercises.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="bg-gradient-to-br from-slate-800/50 to-green-900/50 backdrop-blur-lg rounded-2xl p-6 border border-green-500/20">
              <div className="text-3xl font-bold text-green-400 mb-2">209</div>
              <div className="text-sm text-gray-300">Interactive Lessons</div>
            </div>
            <div className="bg-gradient-to-br from-slate-800/50 to-emerald-900/50 backdrop-blur-lg rounded-2xl p-6 border border-emerald-500/20">
              <div className="text-3xl font-bold text-emerald-400 mb-2">1,847</div>
              <div className="text-sm text-gray-300">Stories Written</div>
            </div>
            <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/50 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20">
              <div className="text-3xl font-bold text-purple-400 mb-2">92%</div>
              <div className="text-sm text-gray-300">Reading Fluency</div>
            </div>
            <div className="bg-gradient-to-br from-slate-800/50 to-blue-900/50 backdrop-blur-lg rounded-2xl p-6 border border-blue-500/20">
              <div className="text-3xl font-bold text-blue-400 mb-2">15</div>
              <div className="text-sm text-gray-300">Achievements</div>
            </div>
          </div>
        </div>

        {/* Language Skills */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Language Skills
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {englishSkills.map((skill) => (
              <div
                key={skill.id}
                className="group bg-gradient-to-br from-slate-800/50 to-green-900/50 backdrop-blur-lg rounded-3xl overflow-hidden border border-green-500/20 hover:border-emerald-400/50 transition-all duration-500 cursor-pointer hover:transform hover:scale-105"
                onClick={() => setSelectedSkill(skill)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={skill.image} 
                    alt={skill.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                  
                  <div className={`absolute top-4 right-4 bg-gradient-to-br ${skill.gradient} p-3 rounded-xl shadow-lg`}>
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>

                  <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm text-white font-medium">{skill.level}</span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{skill.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{skill.description}</p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <BookOpen className="h-4 w-4 text-green-400 mr-2" />
                        <span className="text-sm text-gray-300">{skill.lessons} Activities</span>
                      </div>
                      <div className="flex items-center">
                        <TrendingUp className="h-4 w-4 text-emerald-400 mr-2" />
                        <span className="text-sm text-gray-300">{skill.difficulty}</span>
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  {/* <div className="mb-6">
                    <div className="flex justify-between text-sm text-gray-400 mb-2">
                      <span>Progress</span>
                      <span>{skill.completed}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div 
                        className={`bg-gradient-to-r ${skill.gradient} h-2 rounded-full transition-all duration-1000`}
                        style={{ width: `${skill.completed}%` }}
                      ></div>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 px-6 rounded-xl font-bold hover:from-green-400 hover:to-emerald-500 transition-all duration-300 flex items-center justify-center">
                    <Play className="w-5 h-5 mr-2" />
                    Continue Learning
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </button> */}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Creative Writing Studio */}
        {/* <div className="bg-gradient-to-br from-slate-800/50 to-green-900/50 backdrop-blur-lg rounded-3xl p-12 mb-20 border border-green-500/20">
          <div className="text-center mb-8">
            <h3 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Creative Writing Studio
              </span>
            </h3>
            <p className="text-xl text-gray-300">Express your creativity with guided writing prompts</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl p-8 border border-green-500/30 mb-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <PenTool className="h-6 w-6 text-green-400 mr-3" />
                  <span className="text-lg font-semibold text-white">Writing Prompt</span>
                </div>
                <button
                  onClick={generateNewPrompt}
                  className="bg-green-500/20 hover:bg-green-500/30 text-green-300 px-4 py-2 rounded-xl transition-all duration-300 flex items-center"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  New Prompt
                </button>
              </div>

              <div className="text-xl text-white mb-8 italic leading-relaxed">
                "{writingPrompts[writingPromptIndex]}"
              </div>

              <textarea
                value={currentStory}
                onChange={(e) => setCurrentStory(e.target.value)}
                placeholder="Start writing your story here..."
                className="w-full h-64 bg-slate-800/50 border border-green-500/30 rounded-xl p-4 text-white placeholder-gray-400 focus:border-green-400 focus:outline-none resize-none"
              />

              <div className="flex justify-between items-center mt-6">
                <div className="text-sm text-gray-400">
                  Words: {currentStory.split(' ').filter(word => word.length > 0).length}
                </div>
                <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl font-bold hover:from-green-400 hover:to-emerald-500 transition-all duration-300">
                  Save Story
                </button>
              </div>
            </div>
          </div>
        </div> */}

        {/* Grammar Practice */}
        <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/50 backdrop-blur-lg rounded-3xl p-12 mb-20 border border-purple-500/20">
          <div className="text-center mb-8">
            <h3 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                Grammar Practice
              </span>
            </h3>
            <p className="text-xl text-gray-300">Master grammar rules with interactive exercises</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-purple-500/20 to-violet-500/20 rounded-2xl p-8 border border-purple-500/30">
              <div className="flex items-center justify-between mb-6">
                <span className="text-lg font-semibold text-white">Question {currentGrammarQ + 1} of {grammarQuestions.length}</span>
                <div className="bg-purple-500/20 px-3 py-1 rounded-full">
                  <span className="text-sm text-purple-300">Grammar</span>
                </div>
              </div>

              <div className="text-xl text-white mb-8">
                {grammarQuestions[currentGrammarQ].question}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {grammarQuestions[currentGrammarQ].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    className={`p-4 rounded-xl border transition-all duration-300 text-left ${
                      selectedAnswer === index
                        ? index === grammarQuestions[currentGrammarQ].correct
                          ? 'bg-green-500/20 border-green-400 text-green-300'
                          : 'bg-red-500/20 border-red-400 text-red-300'
                        : 'bg-slate-700/50 border-purple-500/30 text-white hover:border-purple-400/50'
                    }`}
                    disabled={showExplanation}
                  >
                    <span className="font-semibold mr-3">{String.fromCharCode(65 + index)}.</span>
                    {option}
                  </button>
                ))}
              </div>

              {showExplanation && (
                <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl p-6 border border-blue-500/30 mb-6">
                  <div className="flex items-center mb-3">
                    <CheckCircle className="h-5 w-5 text-blue-400 mr-2" />
                    <span className="text-blue-300 font-semibold">Explanation:</span>
                  </div>
                  <div className="text-white">{grammarQuestions[currentGrammarQ].explanation}</div>
                </div>
              )}

              <div className="flex justify-center">
                <button
                  onClick={nextGrammarQuestion}
                  className="bg-gradient-to-r from-purple-500 to-violet-600 text-white px-6 py-3 rounded-xl font-medium hover:from-purple-400 hover:to-violet-500 transition-all duration-300"
                >
                  Next Question
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Reading Corner */}
        <div className="bg-gradient-to-br from-slate-800/50 to-blue-900/50 backdrop-blur-lg rounded-3xl p-12 border border-blue-500/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold mb-8">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Interactive Reading Corner
                </span>
              </h3>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Explore a vast library of interactive stories, poems, and articles 
                with comprehension questions and vocabulary building exercises.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <BookOpen className="h-6 w-6 text-blue-400 mr-4" />
                  <span className="text-gray-300">Interactive story library</span>
                </div>
                <div className="flex items-center">
                  <MessageCircle className="h-6 w-6 text-green-400 mr-4" />
                  <span className="text-gray-300">Comprehension questions</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-6 w-6 text-purple-400 mr-4" />
                  <span className="text-gray-300">Vocabulary building games</span>
                </div>
              </div>

              {/* <button className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white py-4 px-8 rounded-xl font-bold text-lg hover:from-blue-400 hover:to-cyan-500 transition-all duration-300">
                Start Reading
              </button> */}
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/8613026/pexels-photo-8613026.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Students reading interactive stories"
                className="w-full h-80 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent rounded-2xl"></div>
              
              <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-cyan-600 px-4 py-2 rounded-full text-white text-sm font-medium">
                Reading Mode
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EnglishPage;