
import './App.css';
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import FloatingBlobs from  './Components/FloatingBlobs';
import About from './Components/About';

function App() {
  return (
    <div  >
        <FloatingBlobs />
        <Navbar/>
        <About/>
        <Contact/>
        {/* <section id="home"><Home/></section> */}
    </div>
  );
}

export default App;
