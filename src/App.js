import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState("light");
  const [change, setChange] = useState("dark");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1200);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setChange("light");
      document.body.style.backgroundColor = "#23272f";
      showAlert("Dark mode has been enabled", "success");
      document.title = 'Textutils - Dark Mode';
    } else {
      setMode("light");
      setChange("dark");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = 'Textutils - Light Mode'
    }
  };

  return (
    <Router>
      <Navbar
        title="MOhit"
        change={change}
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />

      <div className="container my-3">
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <TextForm showalert={showAlert} heading="Enter the text to analyze" mode={mode} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;



