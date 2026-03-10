import React from 'react';
import EventsSection from '../components/EventsSection.jsx';
import FaqSection from '../components/FaqSection.jsx';
import StaticSection from '../components/StaticSection.jsx';

function HomePage() {
  return (
    <>
      <StaticSection src="hero.html" />
      <StaticSection src="about.html" />
      <StaticSection src="how.html" />
      <EventsSection />
      <FaqSection />
    </>
  );
}

export default HomePage;
