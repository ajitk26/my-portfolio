import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import  Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
//import Contact from "./components/Contact";

function App() {
  return (
  <>
  <Navbar/>
  <Header/>
  <About/>
  <Projects/>
  </>
  );
}

export default App;
