import { ReactP5Wrapper } from "react-p5-wrapper";
import sketch from "./sketch";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Is this printing out!! </p>
        <ReactP5Wrapper sketch={sketch} />
      </header>
    </div>
  );
}

export default App;
