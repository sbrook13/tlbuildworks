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

    const rowStyle = {
      minHeight: "50vh",
      width: "100vw",
      display: "flex",
      backgroundColor: "rgb(30, 30, 30)",
      flexDirection: stackRows ? "column" : "row",
    }

    const testimonialsStyle = {
      minHeight: "50vh",
      width: "100vw",
      display: "flex",
      backgroundColor: "rgb(30, 30, 30)",
      flexDirection: stackRows ? "column-reverse" : "row",
    }

    const blockStyle = {
      minHeight: "50vh",
      width: stackRows ? "100vw": "50vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
    }

    const photoStyle = {
      minHeight: "50vh",
      width: stackRows ? "100vw": "50vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    }

    const outlineStyle = {
      border: "2px solid rgb(30, 30, 30)",
      width: "85%",
      minHeight: "80%",
      position: "relative",
      visibility: stackRows ? "hidden" : "visible",
    }

    const photoBarStyle = {
      height: "50vh",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    }

    const centerStyle = {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgb(30, 30, 30)",
      minHeight: "50vh",
    }

    return (
      <div className="App">
        <Header centerStyle={centerStyle}/>
        <ServicesSection rowStyle={rowStyle} blockStyle={blockStyle} photoStyle={photoStyle} outlineStyle={outlineStyle}/>
        <TestimonialsSection rowStyle={testimonialsStyle} blockStyle={blockStyle} photoStyle={photoStyle} outlineStyle={outlineStyle}/>
        <div style={rowStyle}> 
          <div className="photo-3" style={photoBarStyle}>
            <h2>"If you build it, they will come"</h2>
          </div>
        </div>
        <Footer styles={centerStyle} />
      </div>
    );
  }
}

export default App;
