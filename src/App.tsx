import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StatsSection } from './components/StatsSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Stats } from './components/Stats';
import { LearningApproach } from './components/LearningApproach';
import { Testimonials } from './components/Testimonials';
import { Rules } from './components/Rules';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { About } from './components/About';
import { JoinDemoModal } from './components/JoinDemoModal';
import { CoursesDropdown } from './components/CoursesDropdown';
import { GetInTouchModal } from './components/GetInTouchModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);
  const [isGetInTouchOpen, setIsGetInTouchOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'about'>('home');

  return (
    <div className="min-h-screen bg-white">
      <Header 
        onDemoClick={() => setIsModalOpen(true)} 
        onCoursesClick={() => setIsCoursesDropdownOpen(true)}
        onContactClick={() => setIsGetInTouchOpen(true)}
        onAboutClick={() => setCurrentPage('about')}
        onHomeClick={() => setCurrentPage('home')}
      />
      
      {currentPage === 'home' ? (
        <>
          <Hero onDemoClick={() => setIsModalOpen(true)} onCoursesClick={() => setIsCoursesDropdownOpen(true)} />
          <StatsSection />
          <WhyChooseUs />
          <LearningApproach />
          <Rules />
          <FAQ />
          <CTA onDemoClick={() => setIsModalOpen(true)} />
          <Footer />
        </>
      ) : (
        <>
          <About onBackClick={() => setCurrentPage('home')} />
          <Footer />
        </>
      )}
      
      <JoinDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <CoursesDropdown isOpen={isCoursesDropdownOpen} onClose={() => setIsCoursesDropdownOpen(false)} />
      <GetInTouchModal isOpen={isGetInTouchOpen} onClose={() => setIsGetInTouchOpen(false)} />
    </div>
  );
}

export default App;
