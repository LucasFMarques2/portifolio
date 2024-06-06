import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { NavBar } from './Components/Sections/NavBar';
import { Presentation } from './Components/Sections/Presentation';
import { Skills } from './Components/Sections/Skills';
import { Projects } from './Components/Sections/Projects';
import { Footer } from './Components/Sections/Footer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar/>
    <Presentation/>
    <Skills/>
    <Projects/>
    <Footer/>
  </React.StrictMode>
);

