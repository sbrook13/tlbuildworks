import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header center">
        <div className="header-outline"></div>
        <h1>TL Buildworks</h1>
      </header>
      <div className="row">
        <div className="photo-block photo-1 center">
          <div className="outline"></div>
        </div>
        <div className="content-block center">
          <h2>Services</h2>
        </div>
      </div>
      <div className="row">
        <div className="content-block center">
          <h2>Testimonials</h2>
        </div>
        <div className="photo-block photo-2 center">
          <div className="outline"></div>
        </div>
      </div>
      <div className="row"> 
        <div className="photo-bar photo-3 center">
          <h2>"If you build it, they will come"</h2>
        </div>
      </div>
      <div className="footer center">
        <h2>Contact</h2>
        <p>Tory Larabee</p>
        <p>555.555.5555</p>
        <p>tlbuildworks@gmail.com</p>
      </div>
    </div>
  );
}

export default App;
