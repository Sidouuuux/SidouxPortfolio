import React, { useState, useEffect, useRef } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';
import AnimatedCursor from "react-animated-cursor";
import BIRDS from "vanta/dist/vanta.fog.min";
import * as THREE from "three";

// Components
import Navigation from './components/Navigation';
import Home from './views/Home';
import About from './views/About';
import Qualifications from './views/Qualifications';
import TechStack from './views/TechStack';
import Projects from './views/Projects';
import Contacts from './views/Contacts';
import Footer from './views/Footer';

const App = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          highlightColor: 0x17003D,
          midtoneColor: 0x17003D,
          lowlightColor: 0x17003D,
          baseColor: 0x6C0AFF,
          blurFactor: 0.40,
          speed: 0.7,
          zoom: 1.0
        })
      );
    }
  }, [vantaEffect]);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <AnimatedCursor
        innerSize={10}
        outerSize={20}
        color='255, 255, 255'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link'
        ]}
        style={{
          zIndex: 10000000,
          position: "fixed"
        }}
      />
      <Navigation />
      <main className="l-main" ref={vantaRef}>
        <Home />
        <div className='bg-transparent'>
          <About />
          <Qualifications />
          <TechStack />
          <Projects />
          <Contacts />
        </div>
      </main>
    </div>
  );
};

export default App;
