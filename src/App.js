import "./App.css";
import Navbar from "./components/navbar";
import Marquee from "./components/Marquee";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const content = require("./content.json");

function App() {
  const [currentContent, setCurrentContent] = useState(false);
  const [currentBackground, setCurrentBackground] = useState(
    'url("./assets/backgrounds/slide_one.jpg")'
  );

  useEffect(() => {
    let allContent = content["pages"];
    setCurrentContent(allContent);
  }, []);

  function onChangeBackground(backgroundImage) {
    const background = require(`./assets/backgrounds/${backgroundImage}`)
      .default;
    setCurrentBackground(`url("${background}")`);
  }

    return (
    <div className="app" style={{ backgroundImage: currentBackground }}>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/">
            {currentContent ? (
              <Marquee
                content={currentContent}
                changeBackground={(color) => onChangeBackground(color)}
              />
            ) : null}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
