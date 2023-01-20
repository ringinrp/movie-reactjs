import './App.css';
import NavigationBar from './components/NavigationBar';
import './style/landingpage.css';
import Intro from './components/Intro';
import Tranding from './components/Tranding';
import SuperHero from './components/Superhero';

function App() {
  return (
    <div>

     {/* {introsection} */}
      <div className="myBG">
      <NavigationBar />
      <Intro />
      </div>
     {/* { endintrosection} */}
     <div className="tranding">
        <Tranding />
     </div>
     <div className="superhero">
        <SuperHero />
     </div>
    </div>
  );
}

export default App;
