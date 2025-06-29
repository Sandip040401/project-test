import React from 'react';
import { Brain, Menu, X, Zap } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'maths', label: 'Mathematics' },
    { id: 'english', label: 'English' },
    { id: 'reasoning', label: 'Reasoning' },
    { id: 'computer', label: 'Computing' },
    { id: 'ai', label: 'AI Learning' },
  ];

  return (
    <header className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 backdrop-blur-lg border-b border-purple-500/20 fixed top-0 left-0 right-0 z-50 shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-4">
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
              <span className="text-xs text-cyan-300 -mt-1 font-medium">Future of Education</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`relative font-medium transition-all duration-300 px-6 py-3 rounded-xl ${
                  activeSection === item.id
                    ? 'text-white bg-gradient-to-r from-cyan-500 to-purple-600 shadow-lg shadow-purple-500/25'
                    : 'text-gray-300 hover:text-white hover:bg-white/10 backdrop-blur-sm'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                )}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-3 rounded-xl text-gray-300 hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-6 border-t border-purple-500/20">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-4 px-6 font-medium transition-all duration-300 rounded-xl mb-2 ${
                  activeSection === item.id 
                    ? 'text-white bg-gradient-to-r from-cyan-500 to-purple-600 shadow-lg' 
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;