import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Footer from "./footer";
import Ritik from "./Ritik.jpeg";
import Rj from "./Ritik_Jaiswal.jpg";
import "./App.css";
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom";
function App() {
  return (
    <Router>
      <Nav />
    <div className="App">
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route  path="/home">
        <Home imgs={Ritik} age="21" name="Ritik Jaiswal"/>
      </Route>
      <Route path="/about">
        <About name="Ritik Jaiswal" imgs={Rj}/>
      </Route>
      <Route path="/contact">
        <Contact email="ritik12103032000@gmail.com" insta="https://www.instagram.com/_ritikj1/" git="https://github.com/RitikJaiswal75" link="https://www.linkedin.com/in/ritik-jaiswal75/"/>
      </Route>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
