
import './App.css';
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import FloatingBlobs from  './Components/FloatingBlobs';
import Home from './Components/Home';

function App() {
  return (
    <div  >
        <FloatingBlobs />
        <Navbar/>
        <Home/>
        <Contact/>
        {/* <section id="home"><Home/></section> */}
    </div>
  );
}

export default App;
