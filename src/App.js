import React from "react"
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

// Importing Pages
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";

// Importing Components
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header/>

      <Switch>
        <Route exact path = "/about" component = {About}/>
        <Route exact path = "/projects" component = {Projects}/>
        <Route exact path = "/contact" component = {Contact}/>
        <Route exact path = "/resume" component = {Resume}/>
        <Route component = {About}/>
      </Switch>

      <Footer/>
    </Router>
  );
}

export default App;
