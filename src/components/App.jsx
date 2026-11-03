import React from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import { heroData, aboutData, projectsData, contactData, footerData } from '../mock/data';

function App() {
  // data.js is a static import, so it can go straight into the context.
  // Loading it via useState + useEffect left the context empty during SSR,
  // so the prerendered HTML only contained each component's fallback text.
  return (
    <PortfolioProvider
      value={{
        hero: heroData,
        about: aboutData,
        projects: projectsData,
        contact: contactData,
        footer: footerData,
      }}
    >
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
