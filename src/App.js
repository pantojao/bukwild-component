import "./App.css";
import Navbar from "./components/navbar";
import MarqueeComponent from "./components/Marquee";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const content = require("./content.json");

function App() {
  const [currentContent, setCurrentContent] = useState(false);
  const [currentMarquee, setCurrentMarque] = useState("industries");

  useEffect(() => {
    let allContent = content["pages"];
    setCurrentContent(allContent);
  }, []);

  return (
    <div className="app">
      <Router>
        <Navbar changeMarquee={(current) => setCurrentMarque(current)} />
        <Switch>
          <Route path="/">
            {currentContent ? (
              <MarqueeComponent
                content={currentContent}
                currentMarquee={currentMarquee}
              />
            ) : null}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
