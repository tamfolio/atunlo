import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Achievements from './Components/Achievements/Achievements';
import About from './Components/About/About';
import MeetTheTeam from './Components/About/MeetTheTeam';
import Footer from './Components/Footer/Footer';
import Partners from './Components/Partners/Partners';
import Initiative from './Components/Initiative/Initiative';

function App() {
  return (
    <div className="">
      <Navbar/>
      <Hero/>
      <Achievements/>
      <About/>
      <MeetTheTeam/>
      <Initiative/>
      <Partners/>
      <Footer/>
    </div>
  );
}

export default App;
