import './App.css';
import { Link, Element } from 'react-scroll';
import HOME from './components/HOME/HOME';
import ABOUT from './components/ABOUT/ABOUT';
import PROJECTS from './components/PROJECTS/PROJECTS';
import LINKS from './components/LINKS/LINKS';
import CONTACT from './components/CONTACT/CONTACT';


function App() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <p>YENA.</p>
        </div>
        <div className="pc-menu">
          <ul>
            <li><Link activeClass="active-menu-item" to="home" spy={true} smooth={true} duration={500}>HOME</Link></li>
            <li><Link activeClass="active-menu-item" to="about" spy={true} smooth={true} duration={500}>ABOUT</Link></li>
            <li><Link activeClass="active-menu-item" to="projects" spy={true} smooth={true} duration={500}>PROJECTS</Link></li>
            <li><Link activeClass="active-menu-item" to="links" spy={true} smooth={true} duration={500}>LINKS</Link></li>
            <li><Link activeClass="active-menu-item" to="contact" spy={true} smooth={true} duration={500}>CONTACT</Link></li>
          </ul>
        </div>
      </nav>

      <Element name="home" className="section"><HOME /></Element>
      <Element name="about" className="section"><ABOUT /></Element>
      <Element name="projects" className="section"><PROJECTS /></Element>
      <Element name="links" className="section"><LINKS /></Element>
      <Element name="contact" className="section"><CONTACT /></Element>
    </>
  );
}

export default App;
