import { ReactLenis } from '@studio-freight/react-lenis';
import CustomCursor from '@components/cursor/CustomCursor.tsx';
import Footer from '@components/footer/Footer.tsx';
import Header from '@components/header/Header.tsx';
import Contact from '@pages/Contact.tsx';
import Home from '@pages/Home.tsx';
import Projects from '@pages/Projects.tsx';
import Skills from '@pages/Skills.tsx';

const App = () => {
  return (
    <ReactLenis root>
      <CustomCursor/>
      <header>
        <Header/>
      </header>
      <main>
        <Home/>
        <Skills/>
        <Projects/>
        <Contact/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </ReactLenis>
  );
};

export default App;
