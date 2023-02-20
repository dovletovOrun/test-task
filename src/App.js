import About from './components/About';
import Faq from './components/Faq';
import Features from './components/Features';
import Footer from './components/Footer';
import Hero from './components/Hero';
import MoreFeatures from './components/MoreFeatures';
import './index.scss';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Hero/>
        <Features/>
        <MoreFeatures/>
        <Faq/>
        <About/>
        <Footer/>
      </div>
      
    </div>
  );
}

export default App;
