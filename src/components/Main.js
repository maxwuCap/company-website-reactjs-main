import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';
import React from 'react';
import ReactDOM from 'react-dom';

function Main() {
  return (
    <>
      <main>
        <Services />
        <About />
        <Contact />
      </main>
    </>
  );
}
export default Main;
