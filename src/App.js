import React, {Component} from "react";
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import ServicesSection from './components/ServicesSection'
import TestimonialsSection from './components/TestimonialsSection'
import Footer from './components/Footer'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: 0,
      windowHeight: 0
    };
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  updateDimensions() {
    let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
    let windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;

    this.setState({ windowWidth, windowHeight });
  }
  
  render () {
    const {windowWidth} = this.state

    const stackRows = windowWidth < 550;

    return (
      <div className="App">
        <Header />
        <ServicesSection />
        <TestimonialsSection />
        <div className="row"> 
          <div className="photo-bar photo-3 center">
            <h2>"If you build it, they will come"</h2>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
