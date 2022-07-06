import "./App.css";
import Dictionary from "./Dictionary";
import logo from "./logo.png";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <img src={logo} className="App-logo" alt="logo" size={60} />
        <main>
          <Dictionary defaultKeyword="ocean" />
        </main>
        <footer className="App-footer">
          <small> Coded by Maria Medeiros</small>{" "}
        </footer>
      </div>
    </div>
  );
}

export default App;
