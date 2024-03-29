import React from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/experience';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const App = () => (
  <>
    <Header />
    <Nav />
    <Portfolio />
    <About />
    <Experience />
    <Contact />
    <Footer />
  </>
);

export default App;
