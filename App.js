import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function TodayDate({ isVisible }) {
  const [date, setDate] = useState(`${new Date()}`);
  const update = () => {
    setDate(`${new Date()}`);
  };
  return (
    <>
      <p>{isVisible && date}</p>
      <button onClick={update}>update</button>
      <br />
    </>
  );
}

function App() {
  const [isVisible, setVisible] = useState(true);

  const toggleVisibility = () => setVisible(!isVisible);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TodayDate isVisible={isVisible} />
        {isVisible && <button onClick={toggleVisibility}>hide</button>}
        {!isVisible && <button onClick={toggleVisibility}>show</button>}
      </header>
    </div>
  );
}

export default App;
