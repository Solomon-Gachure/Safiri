import Contact from "./components/contact";
import Footer from "./components/footer";
import Home from "./components/home";
import Hotels from "./components/hotels";
import Navbar from "./components/navbar";
import Sites from "./components/sites";


function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Sites/>
      <Hotels/>
      <Contact />
      <Footer/>
      
    </div>
  );
}

export default App;
