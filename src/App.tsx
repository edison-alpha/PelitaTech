import React from 'react';
import { Navbar } from './components/navbar';
import { Hero } from './components/hero';
import { Services } from './components/services';
import { WhyChooseUs } from './components/why-choose-us';
import { Portfolio } from './components/portfolio';
import { Maps } from './components/maps';
import { CaseStudies } from './components/case-studies';
import { Testimonials } from './components/testimonials';
import { Contact } from './components/contact';
import { Footer } from './components/footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Portfolio />
        <Maps />
        <CaseStudies />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;