import logo from './logo.svg';
import './App.css';
import { Header } from './Components/Header';
import { Banner } from './Components/Banner';
import { Introduction } from './Components/Introduction';
import { BestProduct } from './Components/BestProduct';
import { Production } from './Components/Production';
import { BrandStory } from './Components/BrandStory';
import { Issue } from './Components/Issue';
import { Decoration } from './Components/Decoration';
import { Footer } from './Components/Footer';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner/>
      <Introduction/>
      <BestProduct/>
      <Production/>
      <BrandStory/>
      <Issue/>
      <Decoration/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
