import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SubjectGrid from './components/SubjectGrid';
import ProgressDashboard from './components/ProgressDashboard';
import Footer from './components/Footer';
import MathematicsPage from './components/pages/MathematicsPage';
import EnglishPage from './components/pages/EnglishPage';
import ReasoningPage from './components/pages/ReasoningPage';
import ComputingPage from './components/pages/ComputingPage';
import AILearningPage from './components/pages/AILearningPage';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderPage = () => {
    switch (activeSection) {
      case 'maths':
        return <MathematicsPage setActiveSection={setActiveSection} />;
      case 'english':
        return <EnglishPage setActiveSection={setActiveSection} />;
      case 'reasoning':
        return <ReasoningPage setActiveSection={setActiveSection} />;
      case 'computer':
        return <ComputingPage setActiveSection={setActiveSection} />;
      case 'ai':
        return <AILearningPage setActiveSection={setActiveSection} />;
      default:
        return (
          <>
            <Hero />
            <SubjectGrid setActiveSection={setActiveSection} />
            <ProgressDashboard />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;